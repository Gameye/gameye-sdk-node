import * as uuid from "uuid";
import { GameyeClient } from "../clients/gameye";
import * as models from "../models";
import * as selectors from "../selectors";
import { streamWait, whenFinished } from "../utils";

main();

/*
You must set the GAMEYE_API_TOKEN environment variable to use this !
*/
async function main() {
    // tslint:disable: no-console

    const gameyeClient = new GameyeClient();
    const matchSubscription = await gameyeClient.subscribeMatch();
    const matchKey = uuid();
    let match: models.MatchQueryMatchItem | null = null;

    console.log(`starting match ${matchKey}`);
    console.log(`---`);

    await gameyeClient.commandStartMatch(
        matchKey,
        "csgo-dem",
        ["frankfurt"],
        "bots",
        { maxRounds: 2 },
    );

    /*
    wait for the match to appear in the state
    */
    while (!match) {
        const state = await streamWait<models.MatchQueryState>(matchSubscription);
        match = selectors.selectMatchItem(state, matchKey);
    }

    const statisticSubscription = await gameyeClient.subscribeStatistic(matchKey);
    statisticSubscription.on("data", (state: models.StatisticQueryState) => {
        const round = selectors.getRound(state);
        console.log(`Round: ${round}`);
        console.log(`---`);

        const players = selectors.selectPlayerList(state);
        for (const player of players) {
            console.log(
                `${player.name} has ${player.statistic.kill} kills and ${player.statistic.death} deaths`,
            );
        }
        console.log(`---`);
    });

    /*
    wait for the match to dissappear from the
    state (takes about 2 to 3 minutes)
    */
    while (match) {
        const state = await streamWait<models.MatchQueryState>(matchSubscription);
        match = selectors.selectMatchItem(state, matchKey);
    }

    console.log(`match ${matchKey} finished`);
    console.log(`---`);

    matchSubscription.destroy();
    await whenFinished(matchSubscription);

    statisticSubscription.destroy();
    await whenFinished(statisticSubscription);
}
