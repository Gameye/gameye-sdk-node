import * as models from "../models";
import { GameyeClient } from "./gameye";

export function queryGame(
    this: GameyeClient,
    subscribe = false,
) {
    return this.query<models.GameQueryState>("game", {}, subscribe);
}
