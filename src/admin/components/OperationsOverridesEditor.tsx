import { useEffect, useState } from "react";
import type { OperationsSnapshotGame } from "../../../../grarf/desktop/src/types/operationsSnapshot";
import {
  buildOperationalOverrideDraft,
  type OperationalOverrideDraft,
} from "../lib/buildOperationalOverrideDraft";

type OperationsOverridesEditorProps = {
  game: OperationsSnapshotGame;
};

type DraftField = keyof OperationalOverrideDraft;

function ConsoleOverrideTextInput({
  id,
  label,
  value,
  onChange,
  placeholder,
  monospace,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  monospace?: boolean;
}) {
  return (
    <div className="grarf-admin__console-override-field">
      <label className="grarf-admin__console-override-label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type="text"
        className={
          monospace
            ? "grarf-admin__console-input grarf-admin__console-input--mono"
            : "grarf-admin__console-input"
        }
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

function ConsoleOverrideTextarea({
  id,
  label,
  value,
  onChange,
  placeholder,
  rows = 3,
  monospace,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  monospace?: boolean;
}) {
  return (
    <div className="grarf-admin__console-override-field">
      <label className="grarf-admin__console-override-label" htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        className={
          monospace
            ? "grarf-admin__console-textarea grarf-admin__console-textarea--mono"
            : "grarf-admin__console-textarea"
        }
        value={value}
        rows={rows}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

function ConsoleOverrideSelect({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="grarf-admin__console-override-field">
      <label className="grarf-admin__console-override-label" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        className="grarf-admin__console-select"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">Not set</option>
        <option value="Y">Yes</option>
        <option value="N">No</option>
      </select>
    </div>
  );
}

export function OperationsOverridesEditor({ game }: OperationsOverridesEditorProps) {
  const [draft, setDraft] = useState<OperationalOverrideDraft>(() =>
    buildOperationalOverrideDraft(game)
  );

  useEffect(() => {
    setDraft(buildOperationalOverrideDraft(game));
  }, [game.gameKey]);

  const updateField = (field: DraftField, value: string) => {
    setDraft((current) => ({ ...current, [field]: value }));
  };

  const fieldId = (suffix: string) => `ops-override-${game.gameKey}-${suffix}`;

  return (
    <div className="grarf-admin__console-override-grid">
      <ConsoleOverrideTextInput
        id={fieldId("primary-stream")}
        label="Primary Stream"
        value={draft.primaryStream}
        placeholder="Stream URL or channel URL"
        monospace
        onChange={(value) => updateField("primaryStream", value)}
      />
      <ConsoleOverrideTextarea
        id={fieldId("alternative-streams")}
        label="Alternative Streams"
        value={draft.alternativeStreams}
        placeholder="One stream per line (Display Name — URL)"
        rows={4}
        monospace
        onChange={(value) => updateField("alternativeStreams", value)}
      />
      <ConsoleOverrideTextInput
        id={fieldId("broadcast-override")}
        label="Broadcast Override"
        value={draft.broadcastOverride}
        placeholder="Comma-separated broadcast labels"
        onChange={(value) => updateField("broadcastOverride", value)}
      />
      <ConsoleOverrideTextInput
        id={fieldId("center-pane-url")}
        label="Center Pane URL When Game Card Clicked"
        value={draft.centerPaneUrlWhenGameCardClicked}
        placeholder="https://"
        monospace
        onChange={(value) => updateField("centerPaneUrlWhenGameCardClicked", value)}
      />
      <ConsoleOverrideSelect
        id={fieldId("center-pane")}
        label="Center Pane"
        value={draft.centerPane}
        onChange={(value) => updateField("centerPane", value)}
      />
      <ConsoleOverrideSelect
        id={fieldId("browser-tab")}
        label="Browser Tab"
        value={draft.browserTab}
        onChange={(value) => updateField("browserTab", value)}
      />
      <ConsoleOverrideTextarea
        id={fieldId("manual-highlights")}
        label="Manual Highlights"
        value={draft.manualHighlights}
        placeholder="Highlights configuration or notes"
        rows={3}
        onChange={(value) => updateField("manualHighlights", value)}
      />
      <ConsoleOverrideTextarea
        id={fieldId("manual-social-posts")}
        label="Manual Social Posts"
        value={draft.manualSocialPosts}
        placeholder="Social post references or copy"
        rows={3}
        onChange={(value) => updateField("manualSocialPosts", value)}
      />
      <ConsoleOverrideTextarea
        id={fieldId("operational-notes")}
        label="Operational Notes"
        value={draft.operationalNotes}
        placeholder="Internal operator notes"
        rows={4}
        onChange={(value) => updateField("operationalNotes", value)}
      />
    </div>
  );
}
