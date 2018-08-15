import * as models from "../models";

export type MatchItem = models.MatchQueryMatchItem;

/**
 * Select a list of active matches.
 */
export function selectMatchList(
    matchState: models.MatchQueryState,
): MatchItem[] {
    return Object.values(matchState.match).
        filter(Boolean).
        map(i => i as MatchItem);
}

/**
 * Select a list of active matches for a game.
 */
export function selectMatchListForGame(
    matchState: models.MatchQueryState,
    gameKey: string,
): MatchItem[] {
    return Object.values(matchState.match).
        filter(Boolean).
        map(i => i as MatchItem).
        filter(i => i.gameKey === gameKey);
}

/**
 * Get details about a single match from a match-state as returned by
 * the gameye api.
 */
export function selectMatchItem(
    matchState: models.MatchQueryState,
    matchKey: string,
): MatchItem | null {
    const matchItem = matchState.match[matchKey];
    if (!matchItem) return null;
    return matchItem;
}
