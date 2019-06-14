import * as models from "../models";

export function getRound(state: models.StatisticQueryState) {
    return state.statistic.startedRounds || 0;
}
