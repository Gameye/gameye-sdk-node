import * as models from "../models";
import { GameyeClient } from "./gameye";

interface StatisticQueryArg {
    matchKey: string;
}

/**
 * Fetch statistic state
 * @param matchKey identifier of the match
 */
export function queryStatistic(
    this: GameyeClient,
    matchKey: string,
) {
    return this.query<models.StatisticQueryState, StatisticQueryArg>("statistic", {
        matchKey,
    });
}

/**
 * Subscribe to statistic state
 * @param matchKey identifier of the match
 */
export function subscribeStatistic(
    this: GameyeClient,
    matchKey: string,
) {
    return this.subscribe<models.StatisticQueryState, StatisticQueryArg>("statistic", {
        matchKey,
    });
}
