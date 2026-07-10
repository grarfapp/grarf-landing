import type { OperationsSnapshotGame } from "../../../../grarf/desktop/src/types/operationsSnapshot";
import type { OperationalOverrideDraft } from "./buildOperationalOverrideDraft";

/** Canonical manual operational sections from `operations.ts`. */
export type OperationsManualSection =
  | "manualGameOverrides"
  | "manualEventOverrides"
  | "featuredGames";

export type OperationsChangeField = {
  /** Canonical field key within the target manual section record. */
  fieldKey: string;
  /** Operator-facing label from the Operations Console. */
  label: string;
  section: OperationsManualSection;
  originalValue: string;
  editedValue: string;
};

/**
 * Future Operations API payload — one game override edit session.
 * Replace the temporary Save handler with `POST /operations/change-set` using this shape.
 */
export type OperationsChangeSet = {
  operationalDateKey: string;
  gameKey: string;
  grarfGameId?: string;
  leagueKey: string;
  section: OperationsManualSection;
  assembledAt: string;
  changes: OperationsChangeField[];
  /** Canonical `manualGameOverrides[gameKey]` merge patch for the target date. */
  patch: Record<string, unknown>;
};

export type OperationalOverrideValidationResult =
  | { ok: true }
  | { ok: false; errors: string[] };

type DraftFieldKey = keyof OperationalOverrideDraft;

type DraftFieldSpec = {
  draftKey: DraftFieldKey;
  canonicalKey: string;
  label: string;
  section: OperationsManualSection;
  toPatchFragment: (editedValue: string, draft: OperationalOverrideDraft) => Record<string, unknown>;
};

function normalizeDraftValue(value: string): string {
  return value.trim();
}

function parseCommaSeparatedLabels(value: string): string[] {
  return value
    .split(",")
    .map((label) => label.trim())
    .filter(Boolean);
}

function parseAlternativeStreamsDraft(value: string): Array<Record<string, string>> {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line, index) => {
      const separator = line.indexOf(" — ");
      if (separator >= 0) {
        return {
          id: `manual-alt-${index}`,
          displayName: line.slice(0, separator).trim(),
          deepLink: line.slice(separator + 3).trim(),
        };
      }
      return {
        id: `manual-alt-${index}`,
        displayName: line,
      };
    });
}

const DRAFT_FIELD_SPECS: DraftFieldSpec[] = [
  {
    draftKey: "primaryStream",
    canonicalKey: "streamUrl",
    label: "Primary Stream",
    section: "manualGameOverrides",
    toPatchFragment: (editedValue) =>
      editedValue.trim() ? { streamUrl: editedValue.trim() } : { streamUrl: "" },
  },
  {
    draftKey: "alternativeStreams",
    canonicalKey: "watchOptions",
    label: "Alternative Streams",
    section: "manualGameOverrides",
    toPatchFragment: (editedValue) => ({
      watchOptions: parseAlternativeStreamsDraft(editedValue),
    }),
  },
  {
    draftKey: "broadcastOverride",
    canonicalKey: "broadcasts",
    label: "Broadcast Override",
    section: "manualGameOverrides",
    toPatchFragment: (editedValue) => ({
      broadcasts: parseCommaSeparatedLabels(editedValue),
    }),
  },
  {
    draftKey: "centerPaneUrlWhenGameCardClicked",
    canonicalKey: "centerPaneUrlWhenGameCardClicked",
    label: "Center Pane URL When Game Card Clicked",
    section: "manualGameOverrides",
    toPatchFragment: (editedValue) => ({
      centerPaneUrlWhenGameCardClicked: editedValue.trim(),
    }),
  },
  {
    draftKey: "centerPane",
    canonicalKey: "centerPane",
    label: "Center Pane",
    section: "manualGameOverrides",
    toPatchFragment: (editedValue) => ({
      centerPane: editedValue.trim().toUpperCase(),
    }),
  },
  {
    draftKey: "browserTab",
    canonicalKey: "browserTab",
    label: "Browser Tab",
    section: "manualGameOverrides",
    toPatchFragment: (editedValue) => ({
      browserTab: editedValue.trim().toUpperCase(),
    }),
  },
  {
    draftKey: "manualHighlights",
    canonicalKey: "manualHighlights",
    label: "Manual Highlights",
    section: "manualGameOverrides",
    toPatchFragment: (editedValue) => ({
      manualHighlights: editedValue.trim(),
    }),
  },
  {
    draftKey: "manualSocialPosts",
    canonicalKey: "manualSocialPosts",
    label: "Manual Social Posts",
    section: "manualGameOverrides",
    toPatchFragment: (editedValue) => ({
      manualSocialPosts: editedValue.trim(),
    }),
  },
  {
    draftKey: "operationalNotes",
    canonicalKey: "operationalNotes",
    label: "Operational Notes",
    section: "manualGameOverrides",
    toPatchFragment: (editedValue) => ({
      operationalNotes: editedValue.trim(),
    }),
  },
];

export function resolveOperationsChangeFields(
  originalDraft: OperationalOverrideDraft,
  editedDraft: OperationalOverrideDraft
): OperationsChangeField[] {
  const changes: OperationsChangeField[] = [];

  for (const spec of DRAFT_FIELD_SPECS) {
    const originalValue = normalizeDraftValue(originalDraft[spec.draftKey]);
    const editedValue = normalizeDraftValue(editedDraft[spec.draftKey]);
    if (originalValue === editedValue) continue;

    changes.push({
      fieldKey: spec.canonicalKey,
      label: spec.label,
      section: spec.section,
      originalValue,
      editedValue,
    });
  }

  return changes;
}

export function validateOperationalOverrideDraft(
  draft: OperationalOverrideDraft
): OperationalOverrideValidationResult {
  const errors: string[] = [];
  const navigationUrl = draft.centerPaneUrlWhenGameCardClicked.trim();
  const centerPane = draft.centerPane.trim().toUpperCase();
  const browserTab = draft.browserTab.trim().toUpperCase();

  if (navigationUrl) {
    if (centerPane !== "Y" && browserTab !== "Y") {
      errors.push(
        "Navigation override requires Center Pane or Browser Tab to be set to Yes when a URL is provided."
      );
    }
    if (centerPane === "Y" && browserTab === "Y") {
      errors.push("Center Pane and Browser Tab cannot both be Yes.");
    }
  }

  if ((centerPane === "Y" || browserTab === "Y") && !navigationUrl) {
    errors.push("Center Pane URL is required when Center Pane or Browser Tab is Yes.");
  }

  if (centerPane && centerPane !== "Y" && centerPane !== "N") {
    errors.push('Center Pane must be "Yes", "No", or not set.');
  }

  if (browserTab && browserTab !== "Y" && browserTab !== "N") {
    errors.push('Browser Tab must be "Yes", "No", or not set.');
  }

  return errors.length > 0 ? { ok: false, errors } : { ok: true };
}

export function buildOperationsChangeSet(input: {
  game: OperationsSnapshotGame;
  operationalDateKey: string;
  originalDraft: OperationalOverrideDraft;
  editedDraft: OperationalOverrideDraft;
}): OperationsChangeSet {
  const changes = resolveOperationsChangeFields(input.originalDraft, input.editedDraft);
  const patch: Record<string, unknown> = {};

  for (const change of changes) {
    const spec = DRAFT_FIELD_SPECS.find((row) => row.canonicalKey === change.fieldKey);
    if (!spec) continue;
    Object.assign(patch, spec.toPatchFragment(change.editedValue, input.editedDraft));
  }

  return {
    operationalDateKey: input.operationalDateKey,
    gameKey: input.game.gameKey,
    grarfGameId: input.game.grarfGameId ?? input.game.game.grarfGameId,
    leagueKey: String(input.game.league),
    section: "manualGameOverrides",
    assembledAt: new Date().toISOString(),
    changes,
    patch,
  };
}

/** One game's unsaved operational override edits. */
export type OperationsPendingGameEdit = {
  gameKey: string;
  eventName: string;
  leagueLabel: string;
  operationalDateKey: string;
  originalDraft: OperationalOverrideDraft;
  editedDraft: OperationalOverrideDraft;
  game: OperationsSnapshotGame;
};

/**
 * Future Operations API batch payload — replace Save All with a single API call using this shape.
 */
export type OperationsPendingChangesCollection = {
  operationalDateKey: string;
  assembledAt: string;
  gameCount: number;
  fieldChangeCount: number;
  changeSets: OperationsChangeSet[];
};

export type OperationsPendingChangesValidationIssue = {
  gameKey: string;
  eventName: string;
  errors: string[];
};

export type OperationsPendingChangesBuildResult =
  | { ok: true; collection: OperationsPendingChangesCollection }
  | { ok: false; issues: OperationsPendingChangesValidationIssue[] };

export function countOperationsPendingFieldChanges(
  pendingEdits: OperationsPendingGameEdit[]
): number {
  return pendingEdits.reduce(
    (total, entry) =>
      total + resolveOperationsChangeFields(entry.originalDraft, entry.editedDraft).length,
    0
  );
}

export function validateAndBuildOperationsPendingChangesCollection(
  operationalDateKey: string,
  pendingEdits: OperationsPendingGameEdit[]
): OperationsPendingChangesBuildResult {
  const issues: OperationsPendingChangesValidationIssue[] = [];

  for (const entry of pendingEdits) {
    const validation = validateOperationalOverrideDraft(entry.editedDraft);
    if (!validation.ok) {
      issues.push({
        gameKey: entry.gameKey,
        eventName: entry.eventName,
        errors: validation.errors,
      });
    }
  }

  if (issues.length > 0) {
    return { ok: false, issues };
  }

  const changeSets = pendingEdits.map((entry) =>
    buildOperationsChangeSet({
      game: entry.game,
      operationalDateKey: entry.operationalDateKey,
      originalDraft: entry.originalDraft,
      editedDraft: entry.editedDraft,
    })
  );

  return {
    ok: true,
    collection: {
      operationalDateKey,
      assembledAt: new Date().toISOString(),
      gameCount: changeSets.filter((changeSet) => changeSet.changes.length > 0).length,
      fieldChangeCount: countOperationsPendingFieldChanges(pendingEdits),
      changeSets,
    },
  };
}
