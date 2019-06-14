import * as models from "../models";
import { GameyeClient } from "./gameye";

interface StartMatchPayload {
    matchKey: string;
    gameKey: string;
    locationKeys: string[];
    templateKey: string;
    config: {
        [name: string]: string | number | boolean;
    };
    endCallbackUrl?: string;
}
/**
 * Start a match
 * @param matchKey a unique identifier for this match, you will use this
 * identifier to refer to this match in the future
 * @param gameKey identifier of the game
 * @param locationKeys list of location identifiers, if the first one is not
 * available, the second one is tried and so on.
 * @param templateKey identifier of the template for this game to use
 * @param config configuration of the template
 * @param endCallbackUrl url that gets called (via GET) after the match ended
 */
export function commandStartMatch(
    this: GameyeClient,
    matchKey: string,
    gameKey: string,
    locationKeys: string[],
    templateKey: string,
    config: {
        [name: string]: string | number | boolean;
    },
    endCallbackUrl?: string,
) {
    return this.command<StartMatchPayload>("start-match", {
        matchKey,
        gameKey,
        locationKeys,
        templateKey,
        config,
        endCallbackUrl,
    });
}

interface StopMatchPayload {
    matchKey: string;
}
/**
 * Stop a match
 * @param matchKey Identifer of the match
 */
export function commandStopMatch(
    this: GameyeClient,
    matchKey: string,
) {
    return this.command<StopMatchPayload>("stop-match", {
        matchKey,
    });
}

/**
 * Fetch the match state
 */
export function queryMatch(
    this: GameyeClient,
) {
    return this.query<models.MatchQueryState>("match", {});
}

/**
 * Subscribe to the match state
 */
export function subscribeMatch(
    this: GameyeClient,
) {
    return this.subscribe<models.MatchQueryState>("match", {});
}
