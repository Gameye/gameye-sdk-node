import * as errors from "../errors";
import { GameyeClient } from "./gameye";

export function queryTemplate(
    this: GameyeClient,
) {
    throw new errors.NotImplemented();
}

export function subscribeTemplate(
    this: GameyeClient,
    subscribe = false,
) {
    throw new errors.NotImplemented();
}
