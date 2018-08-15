import * as models from "../models";

export type PlayerItem = models.PlayerModel;

/**
 * List all players in the match.
 *
 * @param object $statisticState
 *
 * @return array
 */
export function selectPlayerList(
    statisticState: models.StatisticQueryState,
): PlayerItem[] {
    const playerIndex = statisticState.statistic.player;
    if (!playerIndex) return [];

    return Object.values(playerIndex);
}

/**
 * Get a list if all players in a team.
 */
export function selectPlayerListForTeam(
    statisticState: models.StatisticQueryState,
    teamKey: string,
): PlayerItem[] {
    const teamIndex = statisticState.statistic.team;
    if (!teamIndex) return [];

    if (!teamIndex[teamKey]) return [];

    const playerIndex = statisticState.statistic.player;
    if (!playerIndex) return [];

    return Object.entries(teamIndex[teamKey].player).
        filter(([, playerEnabled]) => playerEnabled).
        map(([playerKey]) => playerIndex[playerKey]);
}

/**
 * Get a single player in the match.
 */
export function selectPlayerItem(
    statisticState: models.StatisticQueryState,
    playerKey: string,
): PlayerItem | null {
    const playerIndex = statisticState.statistic.player;
    if (!playerIndex) return null;

    const playerItem = playerIndex[playerKey];
    if (!playerItem) return null;

    return playerItem;
}
