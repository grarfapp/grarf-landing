import { useMemo, useState } from "react";
import { OPERATIONS } from "../../../../grarf/desktop/src/data/operations";
import { getOperationalSportsDayDateKey } from "../../../../grarf/desktop/shared/operationalSlateDate.js";
import type {
  OperationsSnapshotGame,
  OperationsSnapshotSection,
} from "../../../../grarf/desktop/src/types/operationsSnapshot";
import { OperationsConsole } from "../components/OperationsConsole";
import { OperationsGameIndicatorBadges } from "../components/OperationsGameIndicatorBadges";
import { useAdminOperationsDateSnapshot } from "../hooks/useAdminOperationsDateSnapshot";

function resolveDefaultOperationalDateKey(): string {
  const configuredDateKeys = Object.keys(OPERATIONS.dates).sort();
  const sportsDayKey = getOperationalSportsDayDateKey();
  if (configuredDateKeys.includes(sportsDayKey)) return sportsDayKey;
  return configuredDateKeys[configuredDateKeys.length - 1] ?? sportsDayKey;
}

function formatGameListLabel(game: OperationsSnapshotGame): string {
  const away = game.participants.away.trim();
  const home = game.participants.home.trim();
  if (away && home) return `${away} @ ${home}`;
  return game.eventName.trim() || game.gameKey;
}

export function OperationsModule() {
  const configuredDateKeys = useMemo(
    () => Object.keys(OPERATIONS.dates).sort(),
    []
  );
  const [operationalDateKey, setOperationalDateKey] = useState(resolveDefaultOperationalDateKey);
  const [selectedSectionKey, setSelectedSectionKey] = useState<string | null>(null);
  const [selectedGameKey, setSelectedGameKey] = useState<string | null>(null);

  const { snapshot, loading, error } = useAdminOperationsDateSnapshot(operationalDateKey);

  const activeSectionKey = useMemo(() => {
    if (!snapshot || snapshot.sections.length === 0) return null;
    if (selectedSectionKey && snapshot.sections.some((section) => section.sectionKey === selectedSectionKey)) {
      return selectedSectionKey;
    }
    return snapshot.sections[0]?.sectionKey ?? null;
  }, [selectedSectionKey, snapshot]);

  const activeSection: OperationsSnapshotSection | null = useMemo(() => {
    if (!snapshot || !activeSectionKey) return null;
    return snapshot.sections.find((section) => section.sectionKey === activeSectionKey) ?? null;
  }, [activeSectionKey, snapshot]);

  const selectedGame: OperationsSnapshotGame | null = useMemo(() => {
    if (!snapshot || !selectedGameKey) return null;
    return snapshot.gamesByKey[selectedGameKey] ?? null;
  }, [selectedGameKey, snapshot]);

  return (
    <>
      <header className="grarf-admin__module-header">
        <h2 className="grarf-admin__module-title">Operations</h2>
        <p className="grarf-admin__module-description">
          Read-only operational snapshot assembled from the same resolvers as the public Games
          Spine. Select a date, section, and game to inspect existing operational data.
        </p>
        <div className="grarf-admin__toolbar">
          <label className="grarf-admin__label" htmlFor="operations-date">
            Operational date
          </label>
          <select
            id="operations-date"
            className="grarf-admin__select"
            value={operationalDateKey}
            onChange={(event) => {
              setOperationalDateKey(event.target.value);
              setSelectedSectionKey(null);
              setSelectedGameKey(null);
            }}
          >
            {configuredDateKeys.map((dateKey) => (
              <option key={dateKey} value={dateKey}>
                {dateKey}
              </option>
            ))}
          </select>
          {loading ? <span className="grarf-admin__status">Assembling snapshot…</span> : null}
          {!loading && snapshot ? (
            <span className="grarf-admin__status">
              Assembled {new Date(snapshot.assembledAt).toLocaleString()}
            </span>
          ) : null}
          {error ? <span className="grarf-admin__status grarf-admin__status--error">{error}</span> : null}
        </div>
      </header>

      <div className="grarf-admin__operations-body">
        <section className="grarf-admin__panel" aria-label="Operational sections">
          <div className="grarf-admin__panel-header">Sections</div>
          <div className="grarf-admin__panel-scroll">
            {!snapshot || snapshot.sections.length === 0 ? (
              <p className="grarf-admin__empty">
                {loading ? "Loading sections…" : "No operational sections for this date."}
              </p>
            ) : (
              <ul className="grarf-admin__list">
                {snapshot.sections.map((section) => {
                  const isActive = section.sectionKey === activeSectionKey;
                  return (
                    <li key={section.sectionKey} className="grarf-admin__list-item">
                      <button
                        type="button"
                        className={
                          isActive
                            ? "grarf-admin__list-button grarf-admin__list-button--active"
                            : "grarf-admin__list-button"
                        }
                        onClick={() => {
                          setSelectedSectionKey(section.sectionKey);
                          setSelectedGameKey(null);
                        }}
                      >
                        {section.sectionLabel}
                        <span className="grarf-admin__list-button-subtitle">
                          {section.kind} · {section.games.length} game
                          {section.games.length === 1 ? "" : "s"}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </section>

        <section className="grarf-admin__panel" aria-label="Games in section">
          <div className="grarf-admin__panel-header">Games</div>
          <div className="grarf-admin__panel-scroll">
            {!activeSection || activeSection.games.length === 0 ? (
              <p className="grarf-admin__empty">
                {loading ? "Loading games…" : "Select a section with games."}
              </p>
            ) : (
              <ul className="grarf-admin__list">
                {activeSection.games.map((game) => {
                  const isActive = game.gameKey === selectedGameKey;
                  return (
                    <li key={game.gameKey} className="grarf-admin__list-item">
                      <button
                        type="button"
                        className={
                          isActive
                            ? "grarf-admin__list-button grarf-admin__list-button--active"
                            : "grarf-admin__list-button"
                        }
                        onClick={() => setSelectedGameKey(game.gameKey)}
                      >
                        <span className="grarf-admin__list-button-row">
                          <span className="grarf-admin__list-button-label">
                            {formatGameListLabel(game)}
                          </span>
                          <OperationsGameIndicatorBadges game={game} />
                        </span>
                        <span className="grarf-admin__list-button-subtitle">
                          {game.status}
                          {game.statusLine ? ` · ${game.statusLine}` : ""}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </section>

        <section className="grarf-admin__panel" aria-label="Operations Console">
          <div className="grarf-admin__panel-header">Operations Console</div>
          <div className="grarf-admin__panel-scroll">
            {selectedGame ? (
              <OperationsConsole
                game={selectedGame}
                operationalDateKey={operationalDateKey}
                assembledAt={snapshot?.assembledAt}
              />
            ) : (
              <p className="grarf-admin__empty">
                Select a game to view its operational summary and manual overrides.
              </p>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
