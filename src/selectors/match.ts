import * as errors from "../errors";
import * as models from "../models";

/**
 * Select a list of active matches.
 *
 * @param object $matchState
 *
 * @return array
 */
export function selectMatchList(
    $matchState: models.MatchState,
) {
    throw new errors.NotImplemented();

    //     $matchState = (object) $matchState;

    //     $matchList = [];
    //     foreach ($matchState->match as $matchKey => $matchItem) {
    //         $matchList[$matchKey] = $matchItem;
    //     }

    //     return $matchList;
    // }

    /**
     * Select a list of active matches for a game.
     *
     * @param object $matchState
     * @param string $gameKey
     *
     * @return array
     */
    // export function selectMatchListForGame(
    //     $matchState,
    //     $gameKey
    // ) {
    //     $matchState = (object) $matchState;
    //     $gameKey = (string) $gameKey;

    //     $matchList = [];
    //     foreach ($matchState->match as $matchKey => $matchItem) {
    //         if ($matchItem->gameKey != $gameKey) {
    //             continue;
    //         }

    //         $matchList[$matchKey] = $matchItem;
    //     }

    //     return $matchList;
    // }

    /**
     * Get details about a single match from a match-state as returned by
     * the gameye api.
     *
     * @param object $matchState
     * @param string $matchKey
     *
     * @return object
     */
    // export function selectMatchItem(
    //     $matchState,
    //     $matchKey
    // ) {
    //     $matchState = (object) $matchState;
    //     $matchKey = (string) $matchKey;

    //     $matchItem = $matchState->match->$matchKey;

    //     return $matchItem;
}
