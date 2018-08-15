import * as models from "../models";
import { GameyeClient } from "./gameye";

export function queryTemplate(
    this: GameyeClient,
) {
    return this.query<models.TemplateQueryState>("template", {});
}

export function subscribeTemplate(
    this: GameyeClient,
) {
    return this.subscribe<models.TemplateQueryState>("template", {});
}
