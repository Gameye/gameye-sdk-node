import * as models from "../models";
import { GameyeClient } from "./gameye";

export interface StatisticQueryArg {
    matchKey: string;
}

export function queryStatistic(
    this: GameyeClient,
    matchKey: string,
    subscribe = false,
) {
    return this.query<models.StatisticQueryState, StatisticQueryArg>("statistic", {
        matchKey,
    }, subscribe);
}
