import * as errors from "../errors";
import { GameyeClient } from "./gameye";

export function queryStatistic(
    this: GameyeClient,
    matchKey: string,
    subscribe = false,
) {
    throw new errors.NotImplemented();
}
