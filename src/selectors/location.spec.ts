import * as test from "blue-tape";
import * as errors from "../errors";
import * as models from "../models";
import { selectLocationListForGame } from "./location";

const gameState: models.GameQueryState = {
    game: {},
    location: {},
};

test("selectLocationListForGame", async t => {
    try {
        selectLocationListForGame(gameState, "");
        t.fail();
    }
    catch (err) {
        if (err instanceof errors.NotImplemented) {
            t.pass();
            err = null;
        }
        if (err) throw err;
    }
});
