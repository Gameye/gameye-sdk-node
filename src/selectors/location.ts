import * as models from "../models";

export type LocationItem = models.GameQueryLocationItem;

/**
 * Selects all locations for a given game.
 */
export function selectLocationListForGame(
    gameState: models.GameQueryState,
    gameKey: string,
): LocationItem[] {
    const gameItem = gameState.game[gameKey];
    if (!gameItem) return [];

    return Object.entries(gameItem.location).
        filter(([, hasLocation]) => hasLocation).
        map(([locationKey]) => ({
            locationKey,
        } as LocationItem));
}
