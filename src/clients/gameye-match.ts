import * as models from "../models";
import { GameyeClient } from "./gameye";

export interface StartMatchPayload {
    matchKey: string;
    gameKey: string;
    locationKeys: string[];
    templateKey: string;
    config: {
        [name: string]: string | number | boolean;
    };
}
export function commandStartMatch(
    this: GameyeClient,
    matchKey: string,
    gameKey: string,
    locationKeys: string[],
    templateKey: string,
    config: {
        [name: string]: string | number | boolean;
    },
) {
    return this.command<StartMatchPayload>("start-match", {
        matchKey,
        gameKey,
        locationKeys,
        templateKey,
        config,
    });
}

export interface StopMatchPayload {
    matchKey: string;
}
export function commandStopMatch(
    this: GameyeClient,
    matchKey: string,
) {
    return this.command<StopMatchPayload>("stop-match", {
        matchKey,
    });
}

export function queryMatch(
    this: GameyeClient,
) {
    return this.query<models.MatchQueryState>("match", {});
}

export function subscribeMatch(
    this: GameyeClient,
) {
    return this.subscribe<models.MatchQueryState>("match", {});
}
