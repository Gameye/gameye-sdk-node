import * as models from "../models";
import { GameyeClient } from "./gameye";

/**
 * Fetch the game state
 */
export function queryGame(
    this: GameyeClient,
) {
    return this.query<models.GameQueryState>("game", {});
}

/**
 * Subscribe to the game state
 */
export function subscribeGame(
    this: GameyeClient,
) {
    return this.subscribe("game", {});
}
