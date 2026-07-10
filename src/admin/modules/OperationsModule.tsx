import { useMemo, useState } from "react";
import type {
  OperationsSnapshotGame,
  OperationsSnapshotSection,
} from "../../../../grarf/desktop/src/types/operationsSnapshot";
import { OperationsConsole } from "../components/OperationsConsole";
import { OperationsGameIndicatorBadges } from "../components/OperationsGameIndicatorBadges";
import { OperationsPendingChangesBar } from "../components/OperationsPendingChangesBar";
import { OperationsSnapshotSearchBar } from "../components/OperationsSnapshotSearchBar";
import { useAdminOperationsDateSnapshot } from "../hooks/useAdminOperationsDateSnapshot";
import { useOperationsPendingChanges } from "../hooks/useOperationsPendingChanges";
import {
  resolveDefaultOperationsConsoleDateKey,
  resolveOperationsConsoleDateKeys,
} from "../lib/resolveOperationsConsoleDateKeys";
import {
  normalizeOperationsSnapshotSearchQuery,
  searchOperationsSnapshotGames,
} from "../lib/searchOperationsSnapshotGames";

function formatGameListLabel(game: OperationsSnapshotGame): string {
  const away = game.participants.away.trim();
  const home = game.participants.home.trim();
  if (away && home) return `${away} @ ${home}`;
  return game.eventName.trim() || game.gameKey;
}

export function OperationsModule() {
  const operationalDateKeys = useMemo(() => resolveOperationsConsoleDateKeys(), []);
  const [operationalDateKey, setOperationalDateKey] = useState(
    resolveDefaultOperationsConsoleDateKey
  );
  const [selectedSectionKey, setSelectedSectionKey] = useState<string | null>(null);
  const [selectedGameKey, setSelectedGameKey] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const { snapshot, loading, error } = useAdminOperationsDateSnapshot(operationalDateKey);
  const normalizedSearchQuery = normalizeOperationsSnapshotSearchQuery(searchQuery);
  const isSearchActive = normalizedSearchQuery.length > 0;

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

  const searchResults = useMemo(() => {
    if (!snapshot || !isSearchActive) return [];
    return searchOperationsSnapshotGames(snapshot, searchQuery);
  }, [isSearchActive, searchQuery, snapshot]);

  const visibleGames = isSearchActive ? searchResults : (activeSection?.games ?? []);

  const {
    activeDraft,
    currentGameChangeCount,
    discardActiveGame,
    discardAll,
    isGamePending,
    pendingEdits,
    pendingGameCount,
    saveAll,
    saveAllState,
    totalPendingFieldChanges,
    updateField,
  } = useOperationsPendingChanges(operationalDateKey, selectedGame);

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
              setSearchQuery("");
            }}
          >
            {operationalDateKeys.map((dateKey) => (
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

      <OperationsPendingChangesBar
        pendingEdits={pendingEdits}
        pendingGameCount={pendingGameCount}
        totalPendingFieldChanges={totalPendingFieldChanges}
        saveAllState={saveAllState}
        onSaveAll={saveAll}
        onDiscardAll={discardAll}
      />

      <OperationsSnapshotSearchBar value={searchQuery} onChange={setSearchQuery} />

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
          <div className="grarf-admin__panel-header">
            {isSearchActive ? "Search Results" : "Games"}
          </div>
          <div className="grarf-admin__panel-scroll">
            {loading ? (
              <p className="grarf-admin__empty">Loading games…</p>
            ) : isSearchActive ? (
              visibleGames.length === 0 ? (
                <p className="grarf-admin__empty">No games match your search.</p>
              ) : (
                <ul className="grarf-admin__list">
                  {visibleGames.map((game) => (
                    <GameListItem
                      key={game.gameKey}
                      game={game}
                      isActive={game.gameKey === selectedGameKey}
                      isGamePending={isGamePending}
                      showLeague
                      onSelect={setSelectedGameKey}
                    />
                  ))}
                </ul>
              )
            ) : !activeSection || visibleGames.length === 0 ? (
              <p className="grarf-admin__empty">Select a section with games.</p>
            ) : (
              <ul className="grarf-admin__list">
                {visibleGames.map((game) => (
                  <GameListItem
                    key={game.gameKey}
                    game={game}
                    isActive={game.gameKey === selectedGameKey}
                    isGamePending={isGamePending}
                    onSelect={setSelectedGameKey}
                  />
                ))}
              </ul>
            )}
          </div>
        </section>

        <section className="grarf-admin__panel" aria-label="Operations Console">
          <div className="grarf-admin__panel-header">Operations Console</div>
          <div className="grarf-admin__panel-scroll">
            {selectedGame && activeDraft ? (
              <OperationsConsole
                game={selectedGame}
                operationalDateKey={operationalDateKey}
                assembledAt={snapshot?.assembledAt}
                draft={activeDraft}
                currentGameChangeCount={currentGameChangeCount}
                onFieldChange={updateField}
                onDiscardCurrent={discardActiveGame}
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

function GameListItem({
  game,
  isActive,
  isGamePending,
  showLeague = false,
  onSelect,
}: {
  game: OperationsSnapshotGame;
  isActive: boolean;
  isGamePending: (gameKey: string) => boolean;
  showLeague?: boolean;
  onSelect: (gameKey: string) => void;
}) {
  const hasPendingEdits = isGamePending(game.gameKey);

  return (
    <li className="grarf-admin__list-item">
      <button
        type="button"
        className={
          isActive
            ? "grarf-admin__list-button grarf-admin__list-button--active"
            : hasPendingEdits
              ? "grarf-admin__list-button grarf-admin__list-button--pending"
              : "grarf-admin__list-button"
        }
        onClick={() => onSelect(game.gameKey)}
      >
        <span className="grarf-admin__list-button-row">
          <span className="grarf-admin__list-button-label">{formatGameListLabel(game)}</span>
          {hasPendingEdits ? (
            <span className="grarf-admin__list-pending-badge" title="Pending edits">
              Pending
            </span>
          ) : null}
          <OperationsGameIndicatorBadges game={game} />
        </span>
        <span className="grarf-admin__list-button-subtitle">
          {showLeague ? (
            <>
              {game.leagueLabel}
              {" · "}
            </>
          ) : null}
          {game.status}
          {game.statusLine ? ` · ${game.statusLine}` : ""}
        </span>
      </button>
    </li>
  );
}
