import * as errors from "../errors";
import { GameyeClient } from "./gameye";

export function commandStartMatch(
    this: GameyeClient,
    $payload: any,
) {
    throw new errors.NotImplemented();
}

export function commandStopMatch(
    this: GameyeClient,
    $payload: any,
) {
    throw new errors.NotImplemented();
}

export function queryMatch(
    this: GameyeClient,
    subscribe = false,
) {
    throw new errors.NotImplemented();
}
