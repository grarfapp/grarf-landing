import { useCallback, useEffect, useMemo, useState } from "react";
import type { OperationsSnapshotGame } from "../../../../grarf/desktop/src/types/operationsSnapshot";
import {
  buildOperationalOverrideDraft,
  type OperationalOverrideDraft,
} from "../lib/buildOperationalOverrideDraft";
import {
  buildOperationsChangeSet,
  resolveOperationsChangeFields,
  validateOperationalOverrideDraft,
  type OperationsChangeSet,
} from "../lib/operationsChangeSet";

export type OperationsOverrideEditorSaveState =
  | { status: "idle" }
  | { status: "validation_error"; errors: string[] }
  | { status: "success"; changeSet: OperationsChangeSet };

export function useOperationsOverrideEditor(
  game: OperationsSnapshotGame,
  operationalDateKey: string
) {
  const [originalDraft, setOriginalDraft] = useState<OperationalOverrideDraft>(() =>
    buildOperationalOverrideDraft(game)
  );
  const [draft, setDraft] = useState<OperationalOverrideDraft>(() =>
    buildOperationalOverrideDraft(game)
  );
  const [saveState, setSaveState] = useState<OperationsOverrideEditorSaveState>({
    status: "idle",
  });

  useEffect(() => {
    const nextOriginal = buildOperationalOverrideDraft(game);
    setOriginalDraft(nextOriginal);
    setDraft(nextOriginal);
    setSaveState({ status: "idle" });
  }, [game.gameKey]);

  const changes = useMemo(
    () => resolveOperationsChangeFields(originalDraft, draft),
    [originalDraft, draft]
  );

  const hasChanges = changes.length > 0;

  const updateField = useCallback((field: keyof OperationalOverrideDraft, value: string) => {
    setDraft((current) => ({ ...current, [field]: value }));
    setSaveState({ status: "idle" });
  }, []);

  const save = useCallback(() => {
    const validation = validateOperationalOverrideDraft(draft);
    if (!validation.ok) {
      setSaveState({ status: "validation_error", errors: validation.errors });
      return null;
    }

    const changeSet = buildOperationsChangeSet({
      game,
      operationalDateKey,
      originalDraft,
      editedDraft: draft,
    });

    setSaveState({ status: "success", changeSet });
    return changeSet;
  }, [draft, game, operationalDateKey, originalDraft]);

  return {
    draft,
    originalDraft,
    changes,
    hasChanges,
    saveState,
    updateField,
    save,
  };
}
