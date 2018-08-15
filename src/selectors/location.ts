import * as errors from "../errors";
import * as models from "../models";

/**
 * Selects all locations for a given game.
 *
 * @param object $gameState
 * @param string $gameKey
 *
 * @return array
 */
export function selectLocationListForGame(
    $gameState: models.GameQueryState,
    $gameKey: string,
) {
    throw new errors.NotImplemented();

    //     $gameState = (object) $gameState;
    //     $gameKey = (string) $gameKey;

    //     $locationList = [];
    //     foreach ($gameState->game->$gameKey->location as $locationKey => $hasLocation) {
    //         if (!$hasLocation) {
    //             continue;
    //         }

    //         $locationItem = $gameState->location->$locationKey;
    //         $locationList[$locationKey] = $locationItem;
    //     }

    //     return $locationList;
}
