import * as models from "../models";
import { GameyeClient } from "./gameye";

export interface StatisticQueryArg {
    matchKey: string;
}

export function queryStatistic(
    this: GameyeClient,
    matchKey: string,
) {
    return this.query<models.StatisticQueryState, StatisticQueryArg>("statistic", {
        matchKey,
    });
}

export function subscribeStatistic(
    this: GameyeClient,
    matchKey: string,
) {
    return this.subscribe<models.StatisticQueryState, StatisticQueryArg>("statistic", {
        matchKey,
    });
}
