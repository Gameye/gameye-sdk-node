import * as models from "../models";

export const matchStateMock: models.MatchQueryState = {
    match: {
        "test-match-123": {
            created: 1518191338368,
            gameKey: "test",
            host: "127.0.0.1",
            locationKey: "local",
            matchKey: "test-match-123",
            port: {
                game: 57015,
                tv: 57025,
            },
        },
        "test-match-456": {
            created: 1518191339368,
            gameKey: "testing",
            host: "127.0.0.1",
            locationKey: "local",
            matchKey: "test-match-456",
            port: {
                game: 67015,
                tv: 67025,
            },
        },
    },
};
