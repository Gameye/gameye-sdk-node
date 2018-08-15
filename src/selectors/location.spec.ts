import * as test from "blue-tape";
import * as errors from "../errors";
import * as mocks from "../mocks";
import { selectLocationListForGame } from "./location";

test("selectLocationListForGame", async t => {
    try {
        selectLocationListForGame(mocks.gameStateMock, "");
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
