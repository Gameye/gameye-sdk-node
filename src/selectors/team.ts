import * as errors from "../errors";
import * as models from "../models";

/**
 * Get a list of all teams in the statistic-state.
 *
 * @param object $statisticState
 *
 * @return array
 */
export function selectTeamList(
    $statisticState: models.StatisticQueryState,
) {
    throw new errors.NotImplemented();

    //     $statisticState = (object) $statisticState;

    //     $teamList = [];
    //     foreach ($statisticState->team as $teamKey => $teamItem) {
    //         $teamList[$teamKey] = $teamItem;
    //     }

    //     return $teamList;
}

/**
 * Get a single team from the statistic-state.
 *
 * @param object $statisticState
 * @param string $teamKey        name of the team
 *
 * @return object
 */
export function selectTeamItem(
    $statisticState: models.StatisticQueryState,
    $teamKey: string,
) {
    throw new errors.NotImplemented();

    //     $statisticState = (object) $statisticState;
    //     $teamKey = (string) $teamKey;

    //     $teamItem = $statisticState->team->$teamKey;

    //     return $teamItem;
}
