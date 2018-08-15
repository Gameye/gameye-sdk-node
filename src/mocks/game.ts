import * as models from "../models";

export const gameStateMock: models.GameQueryState = {
    game: {
        csgo: { gameKey: "csgo", location: {} },
        tf2: { gameKey: "tf2", location: {} },
        css: { gameKey: "css", location: {} },
        l4d2: { gameKey: "l4d2", location: {} },
        kf2: { gameKey: "kf2", location: {} },
        test: { gameKey: "test", location: { local: true } },
    },
    location: {
        rotterdam: { locationKey: "rotterdam" },
        ireland: { locationKey: "ireland" },
        dubai: { locationKey: "dubai" },
        tokyo: { locationKey: "tokyo" },
        los_angeles: { locationKey: "los_angeles" },
        washington_dc: { locationKey: "washington_dc" },
        local: { locationKey: "local" },
    },
};
