import type { OperationsSnapshotGame } from "../../../../grarf/desktop/src/types/operationsSnapshot";
import type { MlbGameStatus } from "../../../../grarf/desktop/src/types/mlbGame";

export type OperationsGameIndicatorId =
  | "featured"
  | "missing-stream"
  | "manual-override"
  | "navigation-override"
  | "needs-attention";

export type OperationsGameIndicatorDefinition = {
  id: OperationsGameIndicatorId;
  emoji: string;
  label: string;
};

export type ResolvedOperationsGameIndicator = OperationsGameIndicatorDefinition & {
  active: boolean;
};

const UPCOMING_OR_LIVE_STATUSES = new Set<MlbGameStatus>(["scheduled", "live"]);

function hasText(value: string | undefined | null): boolean {
  return typeof value === "string" && value.trim().length > 0;
}

function readOverrideString(
  override: OperationsSnapshotGame["manualGameOverride"],
  key: string
): string | null {
  if (!override || typeof override !== "object") return null;
  const value = (override as Record<string, unknown>)[key];
  if (typeof value === "string" && value.trim()) return value.trim();
  return null;
}

function hasPrimaryStream(game: OperationsSnapshotGame): boolean {
  if (hasText(game.streamUrl)) return true;
  const channelUrl = game.game.metadata?.manualGamesSpine?.channelUrl;
  return hasText(channelUrl);
}

function isUpcomingOrLive(game: OperationsSnapshotGame): boolean {
  return UPCOMING_OR_LIVE_STATUSES.has(game.status);
}

function evaluateFeaturedGame(game: OperationsSnapshotGame): boolean {
  return game.featuredRank != null && Number.isFinite(game.featuredRank);
}

function evaluateMissingStream(game: OperationsSnapshotGame): boolean {
  return isUpcomingOrLive(game) && !hasPrimaryStream(game);
}

function evaluateNavigationOverride(game: OperationsSnapshotGame): boolean {
  if (game.navigationOverride) return true;

  const override = game.manualGameOverride;
  if (!override) return false;

  return (
    hasText(override.centerPaneUrlWhenGameCardClicked) ||
    hasText(override.centerPane) ||
    hasText(override.browserTab)
  );
}

function evaluateManualOverride(game: OperationsSnapshotGame): boolean {
  if (evaluateNavigationOverride(game)) return true;

  const override = game.manualGameOverride;
  if (!override) return false;

  if (
    hasText(override.streamUrl) ||
    hasText(override.streamProvider) ||
    hasText(override.channel) ||
    hasText(override.channelUrl) ||
    hasText(override.launchMode)
  ) {
    return true;
  }

  if (override.broadcasts && override.broadcasts.some((label) => hasText(label))) return true;
  if (override.channels && override.channels.some((label) => hasText(label))) return true;
  if (override.watchOptions && override.watchOptions.length > 0) return true;

  if (
    readOverrideString(override, "manualHighlights") ||
    readOverrideString(override, "manualSocialPosts") ||
    readOverrideString(override, "operationalNotes")
  ) {
    return true;
  }

  return false;
}

/** Base indicators evaluated directly from snapshot game state. */
const OPERATIONS_GAME_INDICATOR_DEFINITIONS: OperationsGameIndicatorDefinition[] = [
  { id: "featured", emoji: "⭐", label: "Featured Game" },
  { id: "missing-stream", emoji: "🔴", label: "Missing Stream" },
  { id: "manual-override", emoji: "🟣", label: "Manual Override" },
  { id: "navigation-override", emoji: "🟢", label: "Navigation Override" },
  { id: "needs-attention", emoji: "⚠", label: "Needs Attention" },
];

const OPERATIONS_GAME_INDICATOR_EVALUATORS: Record<
  Exclude<OperationsGameIndicatorId, "needs-attention">,
  (game: OperationsSnapshotGame) => boolean
> = {
  featured: evaluateFeaturedGame,
  "missing-stream": evaluateMissingStream,
  "manual-override": evaluateManualOverride,
  "navigation-override": evaluateNavigationOverride,
};

/**
 * Rules for computed indicators. Add new entries here to extend "Needs Attention"
 * without changing list-row rendering.
 */
const NEEDS_ATTENTION_RULES: Array<
  (activeById: Record<OperationsGameIndicatorId, boolean>) => boolean
> = [(activeById) => activeById["missing-stream"]];

function evaluateNeedsAttention(
  activeById: Record<OperationsGameIndicatorId, boolean>
): boolean {
  return NEEDS_ATTENTION_RULES.some((rule) => rule(activeById));
}

export function resolveOperationsGameIndicators(
  game: OperationsSnapshotGame
): ResolvedOperationsGameIndicator[] {
  const activeById = {} as Record<OperationsGameIndicatorId, boolean>;

  for (const [id, evaluate] of Object.entries(OPERATIONS_GAME_INDICATOR_EVALUATORS)) {
    activeById[id as Exclude<OperationsGameIndicatorId, "needs-attention">] = evaluate(game);
  }

  activeById["needs-attention"] = evaluateNeedsAttention(activeById);

  return OPERATIONS_GAME_INDICATOR_DEFINITIONS.map((definition) => ({
    ...definition,
    active: activeById[definition.id],
  }));
}

/** Active indicators intended for compact game-list display. */
export function resolveActiveOperationsGameIndicators(
  game: OperationsSnapshotGame
): ResolvedOperationsGameIndicator[] {
  return resolveOperationsGameIndicators(game).filter((indicator) => indicator.active);
}
