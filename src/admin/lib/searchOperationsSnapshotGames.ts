import type {
  OperationsDateSnapshot,
  OperationsSnapshotGame,
} from "../../../../grarf/desktop/src/types/operationsSnapshot";

function normalizeSearchText(value: string): string {
  return value.trim().toLowerCase();
}

export function normalizeOperationsSnapshotSearchQuery(query: string): string {
  return normalizeSearchText(query);
}

function pushSearchTerm(terms: string[], value: string | null | undefined): void {
  const trimmed = value?.trim();
  if (trimmed) terms.push(trimmed);
}

/** Collect operator-facing searchable text from one snapshot game. */
export function collectOperationsSnapshotGameSearchTerms(
  game: OperationsSnapshotGame
): string[] {
  const terms: string[] = [];

  pushSearchTerm(terms, game.leagueLabel);
  pushSearchTerm(terms, String(game.league));
  pushSearchTerm(terms, game.eventName);
  pushSearchTerm(terms, game.participants.away);
  pushSearchTerm(terms, game.participants.home);
  pushSearchTerm(terms, game.statusLine);
  pushSearchTerm(terms, game.spineSectionLabel);
  pushSearchTerm(terms, game.spineSectionKey);

  const sourceGame = game.game;
  pushSearchTerm(terms, sourceGame.awayTeam);
  pushSearchTerm(terms, sourceGame.homeTeam);
  pushSearchTerm(terms, sourceGame.awayTeamAbbrev);
  pushSearchTerm(terms, sourceGame.homeTeamAbbrev);
  pushSearchTerm(terms, sourceGame.awayCity);
  pushSearchTerm(terms, sourceGame.homeCity);
  pushSearchTerm(terms, sourceGame.awayPitcher);
  pushSearchTerm(terms, sourceGame.homePitcher);
  pushSearchTerm(terms, sourceGame.statusLine);

  const metadata = sourceGame.metadata;
  if (metadata) {
    pushSearchTerm(terms, metadata.officialAwayName);
    pushSearchTerm(terms, metadata.officialHomeName);
    pushSearchTerm(terms, metadata.tennis?.contextLine);
    pushSearchTerm(terms, metadata.canonicalEvent?.title);
    pushSearchTerm(terms, metadata.canonicalEvent?.sessionLabel);
    pushSearchTerm(terms, metadata.manualGamesSpine?.eventName);
    pushSearchTerm(terms, metadata.manualGamesSpine?.leagueLabel);
    pushSearchTerm(terms, metadata.manualGamesSpine?.displayName);
    pushSearchTerm(terms, metadata.ufcCardName);
    pushSearchTerm(terms, metadata.ufcCardSegment);
    pushSearchTerm(terms, metadata.ufcWeightClass);
    pushSearchTerm(terms, metadata.racingSessionLabel);
    pushSearchTerm(terms, metadata.worldCupGroupNotes);
  }

  pushSearchTerm(terms, sourceGame.awayPlayerRank?.displayLabel);
  pushSearchTerm(terms, sourceGame.homePlayerRank?.displayLabel);

  return terms;
}

export function operationsSnapshotGameMatchesSearchQuery(
  game: OperationsSnapshotGame,
  normalizedQuery: string
): boolean {
  if (!normalizedQuery) return false;

  const haystack = collectOperationsSnapshotGameSearchTerms(game)
    .map(normalizeSearchText)
    .join("\0");

  return haystack.includes(normalizedQuery);
}

/** Search the full snapshot for the active operational date. */
export function searchOperationsSnapshotGames(
  snapshot: OperationsDateSnapshot,
  query: string
): OperationsSnapshotGame[] {
  const normalizedQuery = normalizeOperationsSnapshotSearchQuery(query);
  if (!normalizedQuery) return [];

  const matches: OperationsSnapshotGame[] = [];
  const seenGameKeys = new Set<string>();

  for (const section of snapshot.sections) {
    for (const game of section.games) {
      if (seenGameKeys.has(game.gameKey)) continue;
      if (!operationsSnapshotGameMatchesSearchQuery(game, normalizedQuery)) continue;
      seenGameKeys.add(game.gameKey);
      matches.push(game);
    }
  }

  return matches;
}
