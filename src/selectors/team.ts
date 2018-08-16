import * as models from "../models";

export type TeamItem = models.TeamModel;

/**
 * Get a list of all teams in the statistic-state.
 * @param statisticState statistic state
 */
export function selectTeamList(
    statisticState: models.StatisticQueryState,
): TeamItem[] {
    const teamIndex = statisticState.statistic.team;
    if (!teamIndex) return [];

    return Object.values(teamIndex);
}

/**
 * Get a single team from the statistic-state.
 * @param statisticState statistic state
 * @param teamKey identifier of the team
 */
export function selectTeamItem(
    statisticState: models.StatisticQueryState,
    teamKey: string,
): TeamItem | null {
    const teamIndex = statisticState.statistic.team;
    if (!teamIndex) return null;

    const teamItem = teamIndex[teamKey];
    if (!teamItem) return null;

    return teamItem;
}
