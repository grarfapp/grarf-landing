import type { OperationsChangeSet } from "../lib/operationsChangeSet";

type OperationsChangeSetSummaryProps = {
  changeSet: OperationsChangeSet;
};

export function OperationsChangeSetSummary({ changeSet }: OperationsChangeSetSummaryProps) {
  if (changeSet.changes.length === 0) {
    return (
      <p className="grarf-admin__console-save-message">
        Validation passed. No operational fields differ from the loaded snapshot.
      </p>
    );
  }

  return (
    <div className="grarf-admin__console-change-set">
      <p className="grarf-admin__console-save-message">
        Operations Change Set ready — {changeSet.changes.length} field
        {changeSet.changes.length === 1 ? "" : "s"} changed in{" "}
        <span className="grarf-admin__mono">{changeSet.section}</span>.
      </p>
      <ul className="grarf-admin__console-change-set-list">
        {changeSet.changes.map((change) => (
          <li key={change.fieldKey} className="grarf-admin__console-change-set-item">
            <div className="grarf-admin__console-change-set-field">{change.label}</div>
            <div className="grarf-admin__console-change-set-values">
              <span className="grarf-admin__console-change-set-original">
                {change.originalValue || "—"}
              </span>
              <span className="grarf-admin__console-change-set-arrow" aria-hidden>
                →
              </span>
              <span className="grarf-admin__console-change-set-edited">
                {change.editedValue || "—"}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
