import * as models from "../models";
import { GameyeClient } from "./gameye";

interface SessionRunPayload {
    session: {
        id: string;
        image: string;
        location: string;
        env: {
            [k: string]: any;
        };
        args: string[];
        ports: {
            [k: string]: {
                type: string;
                port: number;
            };
        };
        callback?: string;
    };
}
/**
 * Start a session
 * @param id a unique identifier for this session, you will use this
 * identifier to refer to this session in the future
 * @param image identifier of the docker image
 * @param location location identifier
 * @param env environment variables passed to the container
 * @param args execution arguments for the container
 * @param ports ports to bind
 * @param callback option end session callback url
 */
export function commandSessionRun(
    this: GameyeClient,
    id: string,
    image: string,
    location: string,
    env: { [k: string]: any } = {},
    args: string[] = [],
    ports: {
        [k: string]: {
            type: string;
            port: number;
        },
    },
    callback?: string,
) {
    return this.command<SessionRunPayload>("session-run", {
        session: {
            id,
            image,
            location,
            env,
            args,
            ports,
            callback,
        },
    });
}

interface SessionCancelPayload {
    session: {
        id: string;
    };
}
/**
 * Stop a session
 * @param sessionKey Identifer of the session
 */
export function commandSessionCancel(
    this: GameyeClient,
    id: string,
) {
    return this.command<SessionCancelPayload>("session-cancel", {
        session: {
            id,
        },
    });
}

/**
 * Fetch the session state
 */
export function querySession(
    this: GameyeClient,
) {
    return this.query<models.SessionQueryState>("session", {});
}

/**
 * Fetch the session state
 */
export function querySessionArtifacts(
    this: GameyeClient,
    sessionId: string,
    path?: string,
) {
    return this.query<models.SessionQueryState>("artifacts", { sessionId, path });
}

/**
 * Subscribe to the session state
 */
export function subscribeSession(
    this: GameyeClient,
) {
    return this.subscribe("session", {});
}
