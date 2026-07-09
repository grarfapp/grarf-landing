import { useState, type ReactNode } from "react";
import type { OperationsSnapshotGame } from "../../../../grarf/desktop/src/types/operationsSnapshot";
import { OperationsOverridesEditor } from "./OperationsOverridesEditor";

type OperationsConsoleProps = {
  game: OperationsSnapshotGame;
  operationalDateKey: string;
  assembledAt?: string;
};

function formatTimestamp(ms: number | undefined): string | null {
  if (ms == null || !Number.isFinite(ms)) return null;
  return new Date(ms).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function formatParticipants(game: OperationsSnapshotGame): string {
  const away = game.participants.away.trim();
  const home = game.participants.home.trim();
  if (away && home) return `${away} @ ${home}`;
  if (away) return away;
  if (home) return home;
  return "—";
}

function formatBroadcasts(broadcasts: string[]): string | null {
  const labels = broadcasts.map((label) => label.trim()).filter(Boolean);
  if (labels.length === 0) return null;
  return labels.join(", ");
}

function hasText(value: string | undefined | null): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function ConsoleField({
  label,
  value,
  monospace,
}: {
  label: string;
  value: string | null | undefined;
  monospace?: boolean;
}) {
  const populated = hasText(value);
  return (
    <div className="grarf-admin__console-field">
      <div className="grarf-admin__console-field-label">{label}</div>
      {populated ? (
        <div
          className={
            monospace
              ? "grarf-admin__console-field-value grarf-admin__console-field-value--mono"
              : "grarf-admin__console-field-value"
          }
        >
          {value}
        </div>
      ) : (
        <div className="grarf-admin__console-field-empty">No value set</div>
      )}
    </div>
  );
}

function ConsoleSection({
  title,
  description,
  children,
  prominent,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  prominent?: boolean;
}) {
  return (
    <section
      className={
        prominent
          ? "grarf-admin__console-section grarf-admin__console-section--prominent"
          : "grarf-admin__console-section"
      }
    >
      <header className="grarf-admin__console-section-header">
        <h3 className="grarf-admin__console-section-title">{title}</h3>
        {description ? (
          <p className="grarf-admin__console-section-description">{description}</p>
        ) : null}
      </header>
      <div className="grarf-admin__console-section-body">{children}</div>
    </section>
  );
}

export function OperationsConsole({
  game,
  operationalDateKey,
  assembledAt,
}: OperationsConsoleProps) {
  const [systemOpen, setSystemOpen] = useState(false);
  const featuredLabel =
    game.featuredRank != null && Number.isFinite(game.featuredRank)
      ? `Yes — Rank #${game.featuredRank}`
      : "No";

  return (
    <div className="grarf-admin__console">
      <ConsoleSection
        title="Game Information"
        description="What GRARF currently knows about this game from ingest and operational assembly."
        prominent
      >
        <div className="grarf-admin__console-game-summary">
          <div className="grarf-admin__console-game-title">{game.eventName}</div>
          <div className="grarf-admin__console-game-meta">
            <span className="grarf-admin__console-status-pill">{game.status}</span>
            {game.statusLine ? (
              <span className="grarf-admin__console-status-line">{game.statusLine}</span>
            ) : null}
          </div>
        </div>
        <div className="grarf-admin__console-field-grid">
          <ConsoleField label="League" value={game.leagueLabel} />
          <ConsoleField label="Game / Event" value={game.eventName} />
          <ConsoleField label="Participants" value={formatParticipants(game)} />
          <ConsoleField label="Status" value={game.status} />
          <ConsoleField label="Start Time" value={formatTimestamp(game.startTimeMs)} />
          <ConsoleField label="End Time" value={formatTimestamp(game.endTimeMs)} />
          <ConsoleField label="Broadcast(s)" value={formatBroadcasts(game.broadcasts)} />
          <ConsoleField label="Operational Date" value={operationalDateKey} />
          <ConsoleField label="Featured Game" value={featuredLabel} />
        </div>
      </ConsoleSection>

      <ConsoleSection
        title="Operational Overrides"
        description="Edit manual operational fields for this game. Changes are kept in local draft state only and are not saved."
      >
        <OperationsOverridesEditor game={game} />
      </ConsoleSection>

      <section className="grarf-admin__console-section grarf-admin__console-section--system">
        <button
          type="button"
          className="grarf-admin__console-system-toggle"
          aria-expanded={systemOpen}
          onClick={() => setSystemOpen((open) => !open)}
        >
          <span className="grarf-admin__console-system-toggle-label">System Information</span>
          <span className="grarf-admin__console-system-toggle-icon" aria-hidden>
            {systemOpen ? "−" : "+"}
          </span>
        </button>
        {systemOpen ? (
          <div className="grarf-admin__console-section-body grarf-admin__console-system-body">
            <div className="grarf-admin__console-field-grid grarf-admin__console-field-grid--compact">
              <ConsoleField label="Game Key" value={game.gameKey} monospace />
              <ConsoleField label="GRARF Game ID" value={game.grarfGameId ?? game.game.grarfGameId} monospace />
              <ConsoleField label="League Key" value={String(game.league)} monospace />
              <ConsoleField label="Source" value={game.source} />
              <ConsoleField label="Section Kind" value={game.sectionKind} />
              <ConsoleField label="Spine Section" value={game.spineSectionLabel} />
              <ConsoleField label="Spine Section Key" value={game.spineSectionKey} monospace />
              <ConsoleField label="Ingest Game ID" value={game.game.id} monospace />
              <ConsoleField label="Scheduled Date Key" value={game.scheduledDateKey ?? null} monospace />
              <ConsoleField
                label="Stream Provider"
                value={game.streamProvider ?? game.game.streamProvider ?? null}
              />
              <ConsoleField label="Snapshot Assembled" value={assembledAt ? new Date(assembledAt).toLocaleString() : null} />
              <ConsoleField label="Operational Date Key" value={operationalDateKey} monospace />
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}
