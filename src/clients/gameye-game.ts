import * as models from "../models";
import { GameyeClient } from "./gameye";

export function queryGame(
    this: GameyeClient,
) {
    return this.query<models.GameQueryState>("game", {});
}

export function subscribeGame(
    this: GameyeClient,
) {
    return this.subscribe<models.GameQueryState>("game", {});
}
