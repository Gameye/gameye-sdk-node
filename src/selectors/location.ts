import * as models from "../models";

export type LocationItem = models.GameQueryLocationItem;

/**
 * Selects all locations for a given game.
 * @param gameState game state
 * @param gameKey identifier of the game
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
