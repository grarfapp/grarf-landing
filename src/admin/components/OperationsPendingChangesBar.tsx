import {
  resolveOperationsChangeFields,
  type OperationsPendingChangesCollection,
  type OperationsPendingChangesValidationIssue,
  type OperationsPendingGameEdit,
} from "../lib/operationsChangeSet";
import { OperationsChangeSetSummary } from "./OperationsChangeSetSummary";

type OperationsPendingChangesBarProps = {
  pendingEdits: OperationsPendingGameEdit[];
  pendingGameCount: number;
  totalPendingFieldChanges: number;
  saveAllState:
    | { status: "idle" }
    | { status: "validation_error"; issues: OperationsPendingChangesValidationIssue[] }
    | { status: "success"; collection: OperationsPendingChangesCollection };
  onSaveAll: () => void;
  onDiscardAll: () => void;
};

export function OperationsPendingChangesBar({
  pendingEdits,
  pendingGameCount,
  totalPendingFieldChanges,
  saveAllState,
  onSaveAll,
  onDiscardAll,
}: OperationsPendingChangesBarProps) {
  const hasPending = pendingGameCount > 0;
  const eventNameByGameKey = new Map(
    pendingEdits.map((entry) => [entry.gameKey, entry.eventName])
  );

  return (
    <section className="grarf-admin__pending-bar" aria-label="Pending operational changes">
      <div className="grarf-admin__pending-bar-header">
        <div className="grarf-admin__pending-bar-summary">
          <span className="grarf-admin__pending-bar-count">{totalPendingFieldChanges}</span>
          <div className="grarf-admin__pending-bar-copy">
            <div className="grarf-admin__pending-bar-title">Pending Changes</div>
            <div className="grarf-admin__pending-bar-subtitle">
              {hasPending
                ? `${pendingGameCount} game${pendingGameCount === 1 ? "" : "s"} with unsaved edits`
                : "No unsaved operational edits"}
            </div>
          </div>
        </div>
        <div className="grarf-admin__pending-bar-actions">
          <button
            type="button"
            className="grarf-admin__pending-discard-button"
            disabled={!hasPending}
            onClick={onDiscardAll}
          >
            Discard All
          </button>
          <button
            type="button"
            className="grarf-admin__console-save-button"
            disabled={!hasPending}
            onClick={onSaveAll}
          >
            Save All
          </button>
        </div>
      </div>

      {hasPending ? (
        <ul className="grarf-admin__pending-game-list">
          {pendingEdits.map((entry) => (
            <PendingGameListItem key={entry.gameKey} entry={entry} />
          ))}
        </ul>
      ) : null}

      {saveAllState.status === "validation_error" ? (
        <div className="grarf-admin__console-save-feedback grarf-admin__console-save-feedback--error">
          <p className="grarf-admin__console-save-feedback-title">Save All validation failed</p>
          <ul className="grarf-admin__console-save-error-list">
            {saveAllState.issues.map((issue) => (
              <li key={issue.gameKey}>
                <strong>{issue.eventName}</strong>: {issue.errors.join(" ")}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {saveAllState.status === "success" ? (
        <div className="grarf-admin__console-save-feedback grarf-admin__console-save-feedback--success">
          <p className="grarf-admin__console-save-feedback-title">Pending changes collection ready</p>
          <p className="grarf-admin__console-save-message">
            {saveAllState.collection.gameCount} game
            {saveAllState.collection.gameCount === 1 ? "" : "s"} ·{" "}
            {saveAllState.collection.fieldChangeCount} field change
            {saveAllState.collection.fieldChangeCount === 1 ? "" : "s"} ready for the future
            Operations API.
          </p>
          <div className="grarf-admin__pending-collection">
            {saveAllState.collection.changeSets
              .filter((changeSet) => changeSet.changes.length > 0)
              .map((changeSet) => (
                <div key={changeSet.gameKey} className="grarf-admin__pending-collection-item">
                  <div className="grarf-admin__pending-collection-game">
                    {eventNameByGameKey.get(changeSet.gameKey) ?? changeSet.gameKey}
                  </div>
                  <OperationsChangeSetSummary changeSet={changeSet} />
                </div>
              ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

function PendingGameListItem({ entry }: { entry: OperationsPendingGameEdit }) {
  const changeCount = resolveOperationsChangeFields(entry.originalDraft, entry.editedDraft).length;

  return (
    <li className="grarf-admin__pending-game-item">
      <span className="grarf-admin__pending-game-marker" aria-hidden />
      <div className="grarf-admin__pending-game-copy">
        <div className="grarf-admin__pending-game-name">{entry.eventName}</div>
        <div className="grarf-admin__pending-game-meta">
          {entry.leagueLabel} · {changeCount} field change{changeCount === 1 ? "" : "s"}
        </div>
      </div>
      <span className="grarf-admin__pending-game-ready">Ready</span>
    </li>
  );
}
