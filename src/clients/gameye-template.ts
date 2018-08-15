import * as models from "../models";
import { GameyeClient } from "./gameye";

export function queryTemplate(
    this: GameyeClient,
    subscribe = false,
) {
    return this.query<models.TemplateQueryState>("template", {}, subscribe);
}
