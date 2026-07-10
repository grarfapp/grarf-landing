import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { OperationsSnapshotGame } from "../../../../grarf/desktop/src/types/operationsSnapshot";
import {
  buildOperationalOverrideDraft,
  type OperationalOverrideDraft,
} from "../lib/buildOperationalOverrideDraft";
import {
  countOperationsPendingFieldChanges,
  resolveOperationsChangeFields,
  validateAndBuildOperationsPendingChangesCollection,
  type OperationsPendingChangesCollection,
  type OperationsPendingChangesValidationIssue,
  type OperationsPendingGameEdit,
} from "../lib/operationsChangeSet";

export type OperationsPendingChangesSaveState =
  | { status: "idle" }
  | { status: "validation_error"; issues: OperationsPendingChangesValidationIssue[] }
  | { status: "success"; collection: OperationsPendingChangesCollection };

function buildPendingGameEdit(input: {
  game: OperationsSnapshotGame;
  operationalDateKey: string;
  originalDraft: OperationalOverrideDraft;
  editedDraft: OperationalOverrideDraft;
}): OperationsPendingGameEdit {
  return {
    gameKey: input.game.gameKey,
    eventName: input.game.eventName,
    leagueLabel: input.game.leagueLabel,
    operationalDateKey: input.operationalDateKey,
    originalDraft: input.originalDraft,
    editedDraft: input.editedDraft,
    game: input.game,
  };
}

export function useOperationsPendingChanges(
  operationalDateKey: string,
  selectedGame: OperationsSnapshotGame | null
) {
  const [pendingByGameKey, setPendingByGameKey] = useState<
    Record<string, OperationsPendingGameEdit>
  >({});
  const [activeOriginalDraft, setActiveOriginalDraft] = useState<OperationalOverrideDraft | null>(
    null
  );
  const [activeDraft, setActiveDraft] = useState<OperationalOverrideDraft | null>(null);
  const [saveAllState, setSaveAllState] = useState<OperationsPendingChangesSaveState>({
    status: "idle",
  });

  const pendingRef = useRef(pendingByGameKey);
  pendingRef.current = pendingByGameKey;

  const pendingEdits = useMemo(
    () => Object.values(pendingByGameKey),
    [pendingByGameKey]
  );

  const pendingGameKeys = useMemo(
    () => new Set(pendingEdits.map((entry) => entry.gameKey)),
    [pendingEdits]
  );

  const totalPendingFieldChanges = useMemo(
    () => countOperationsPendingFieldChanges(pendingEdits),
    [pendingEdits]
  );

  const currentGameChangeCount = useMemo(() => {
    if (!selectedGame || !activeDraft || !activeOriginalDraft) return 0;
    return resolveOperationsChangeFields(activeOriginalDraft, activeDraft).length;
  }, [activeDraft, activeOriginalDraft, selectedGame]);

  const syncPendingEntry = useCallback(
    (
      game: OperationsSnapshotGame,
      originalDraft: OperationalOverrideDraft,
      editedDraft: OperationalOverrideDraft
    ) => {
      const changes = resolveOperationsChangeFields(originalDraft, editedDraft);
      setPendingByGameKey((current) => {
        if (changes.length === 0) {
          if (!current[game.gameKey]) return current;
          const next = { ...current };
          delete next[game.gameKey];
          return next;
        }

        return {
          ...current,
          [game.gameKey]: buildPendingGameEdit({
            game,
            operationalDateKey,
            originalDraft,
            editedDraft,
          }),
        };
      });
      setSaveAllState({ status: "idle" });
    },
    [operationalDateKey]
  );

  useEffect(() => {
    setPendingByGameKey({});
    setSaveAllState({ status: "idle" });
  }, [operationalDateKey]);

  useEffect(() => {
    if (!selectedGame) {
      setActiveOriginalDraft(null);
      setActiveDraft(null);
      return;
    }

    const snapshotOriginal = buildOperationalOverrideDraft(selectedGame);
    const pending = pendingRef.current[selectedGame.gameKey];

    setActiveOriginalDraft(pending?.originalDraft ?? snapshotOriginal);
    setActiveDraft(pending?.editedDraft ?? snapshotOriginal);
  }, [selectedGame?.gameKey, selectedGame]);

  const updateField = useCallback(
    (field: keyof OperationalOverrideDraft, value: string) => {
      if (!selectedGame || !activeOriginalDraft) return;

      setActiveDraft((current) => {
        const baseDraft = current ?? activeOriginalDraft;
        const nextDraft = { ...baseDraft, [field]: value };
        syncPendingEntry(selectedGame, activeOriginalDraft, nextDraft);
        return nextDraft;
      });
    },
    [activeOriginalDraft, selectedGame, syncPendingEntry]
  );

  const discardGame = useCallback(
    (gameKey: string) => {
      setPendingByGameKey((current) => {
        if (!current[gameKey]) return current;
        const next = { ...current };
        delete next[gameKey];
        return next;
      });
      setSaveAllState({ status: "idle" });

      if (selectedGame?.gameKey === gameKey) {
        const original = buildOperationalOverrideDraft(selectedGame);
        setActiveOriginalDraft(original);
        setActiveDraft(original);
      }
    },
    [selectedGame]
  );

  const discardActiveGame = useCallback(() => {
    if (!selectedGame) return;
    discardGame(selectedGame.gameKey);
  }, [discardGame, selectedGame]);

  const discardAll = useCallback(() => {
    setPendingByGameKey({});
    setSaveAllState({ status: "idle" });
    if (selectedGame) {
      const original = buildOperationalOverrideDraft(selectedGame);
      setActiveOriginalDraft(original);
      setActiveDraft(original);
    }
  }, [selectedGame]);

  const saveAll = useCallback(() => {
    const result = validateAndBuildOperationsPendingChangesCollection(
      operationalDateKey,
      pendingEdits
    );

    if (!result.ok) {
      setSaveAllState({ status: "validation_error", issues: result.issues });
      return null;
    }

    setSaveAllState({ status: "success", collection: result.collection });
    return result.collection;
  }, [operationalDateKey, pendingEdits]);

  const isGamePending = useCallback(
    (gameKey: string) => pendingGameKeys.has(gameKey),
    [pendingGameKeys]
  );

  return {
    activeDraft,
    currentGameChangeCount,
    discardActiveGame,
    discardAll,
    discardGame,
    isGamePending,
    pendingEdits,
    pendingGameCount: pendingEdits.length,
    pendingGameKeys,
    saveAll,
    saveAllState,
    totalPendingFieldChanges,
    updateField,
  };
}
