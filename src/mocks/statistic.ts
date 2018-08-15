import * as models from "../models";

export const statisticStateMock: models.StatisticQueryState = {
    statistic: {
        start: 1519833365000,
        stop: 1519834524000,
        player: {
            3: {
                playerKey: "3",
                connected: false,
                uid: "STEAM_1:1:218909830",
                name: "denise",
                statistic: {
                    assist: 0,
                    death: 19,
                    kill: 17,
                },
            },
            4: {
                playerKey: "4",
                connected: false,
                uid: "STEAM_1:1:24748064",
                name: "Smashmint",
                statistic: {
                    assist: 0,
                    death: 17,
                    kill: 19,
                },
            },
        },
        startedRounds: 36,
        finishedRounds: 36,
        team: {
            1: {
                teamKey: "1",
                name: "TeamA",
                statistic: {
                    score: 17,
                },
                player: {
                    3: true,
                },
            },
            2: {
                teamKey: "2",
                name: "TeamB",
                statistic: {
                    score: 19,
                },
                player: {
                    4: true,
                },
            },
        },
    },
};
