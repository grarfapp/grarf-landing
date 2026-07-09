import type { OperationsSnapshotGame } from "../../../../grarf/desktop/src/types/operationsSnapshot";
import type { WatchOption } from "../../../../grarf/desktop/src/types/watchRouting";

export type OperationalOverrideDraft = {
  primaryStream: string;
  alternativeStreams: string;
  broadcastOverride: string;
  centerPaneUrlWhenGameCardClicked: string;
  centerPane: string;
  browserTab: string;
  manualHighlights: string;
  manualSocialPosts: string;
  operationalNotes: string;
};

function hasText(value: string | undefined | null): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function formatWatchOptions(options: WatchOption[] | undefined): string {
  if (!options || options.length === 0) return "";
  return options
    .map((option) => {
      const label = option.displayName?.trim() || option.provider;
      const link = option.deepLink?.trim();
      return link ? `${label} — ${link}` : label;
    })
    .join("\n");
}

function readOverrideString(
  override: OperationsSnapshotGame["manualGameOverride"],
  key: string
): string {
  if (!override || typeof override !== "object") return "";
  const value = (override as Record<string, unknown>)[key];
  if (typeof value === "string" && value.trim()) return value.trim();
  return "";
}

function resolveYesNoDraft(
  overrideValue: string | undefined,
  resolvedFlag: boolean | undefined
): string {
  if (hasText(overrideValue)) return overrideValue.trim().toUpperCase();
  if (resolvedFlag) return "Y";
  return "";
}

/** Initialize editable override draft from the snapshot game's current operational values. */
export function buildOperationalOverrideDraft(game: OperationsSnapshotGame): OperationalOverrideDraft {
  const override = game.manualGameOverride;

  let primaryStream = "";
  if (hasText(override?.streamUrl)) {
    primaryStream = override.streamUrl.trim();
  } else if (hasText(override?.channelUrl)) {
    primaryStream = override.channelUrl.trim();
  }

  let broadcastOverride = "";
  if (override?.broadcasts && override.broadcasts.length > 0) {
    broadcastOverride = override.broadcasts
      .map((label) => label.trim())
      .filter(Boolean)
      .join(", ");
  } else if (override?.channels && override.channels.length > 0) {
    broadcastOverride = override.channels
      .map((label) => label.trim())
      .filter(Boolean)
      .join(", ");
  } else if (hasText(override?.channel)) {
    broadcastOverride = override.channel.trim();
  }

  let centerPaneUrlWhenGameCardClicked = "";
  if (hasText(override?.centerPaneUrlWhenGameCardClicked)) {
    centerPaneUrlWhenGameCardClicked = override.centerPaneUrlWhenGameCardClicked.trim();
  } else if (hasText(game.navigationOverride?.url)) {
    centerPaneUrlWhenGameCardClicked = game.navigationOverride.url.trim();
  }

  return {
    primaryStream,
    alternativeStreams: formatWatchOptions(override?.watchOptions),
    broadcastOverride,
    centerPaneUrlWhenGameCardClicked,
    centerPane: resolveYesNoDraft(override?.centerPane, game.navigationOverride?.openInCenterPane),
    browserTab: resolveYesNoDraft(override?.browserTab, game.navigationOverride?.openInBrowserTab),
    manualHighlights: readOverrideString(override, "manualHighlights"),
    manualSocialPosts: readOverrideString(override, "manualSocialPosts"),
    operationalNotes: readOverrideString(override, "operationalNotes"),
  };
}
