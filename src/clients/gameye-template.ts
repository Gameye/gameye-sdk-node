import * as models from "../models";
import { GameyeClient } from "./gameye";

interface TemplateQueryArg {
    gameKey: string;
}

/**
 * Fetch template state
 * @param gameKey identifier of the game
 */
export function queryTemplate(
    this: GameyeClient,
    gameKey: string,
) {
    return this.query<models.TemplateQueryState, TemplateQueryArg>("template", { gameKey });
}

/**
 * Subscribe to template state
 * @param gameKey identifier of the game
 */
export function subscribeTemplate(
    this: GameyeClient,
    gameKey: string,
) {
    return this.subscribe<models.TemplateQueryState, TemplateQueryArg>("template", { gameKey });
}
