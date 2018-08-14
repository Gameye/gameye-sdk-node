import * as errors from "../errors";
import * as models from "../models";

/**
 * List all players in the match.
 *
 * @param object $statisticState
 *
 * @return array
 */
export function selectPlayerList(
    $statisticState: models.StatisticState,
) {
    throw new errors.NotImplemented();

    //     $statisticState = (object) $statisticState;

    //     $playerList = [];
    //     foreach ($statisticState->player as $playerKey => $playerItem) {
    //         $playerList[$playerKey] = $playerItem;
    //     }

    //     return $playerList;
}

/**
 * Get a list if all players in a team.
 *
 * @param object $statisticState
 * @param string $teamKey        name of the team
 *
 * @return array
 */
export function selectPlayerListForTeam(
    $statisticState: models.StatisticState,
    $teamKey: string,
) {
    throw new errors.NotImplemented();

    //     $statisticState = (object) $statisticState;

    //     $playerList = [];
    //     foreach ($statisticState->team->$teamKey->player as $playerKey => $playerEnabled) {
    //         $playerItem = $statisticState->player->$playerKey;
    //         $playerList[$playerKey] = $playerItem;
    //     }

    //     return $playerList;
}

/**
 * Get a single player in the match.
 *
 * @param object $statisticState
 *
 * @return object
 */
export function selectPlayerItem(
    $statisticState: models.StatisticState,
    $playerKey: string,
) {
    throw new errors.NotImplemented();

    //     $statisticState = (object) $statisticState;
    //     $playerKey = (string) $playerKey;

    //     $playerItem = $statisticState->player->$playerKey;

    //     return $playerItem;
}
