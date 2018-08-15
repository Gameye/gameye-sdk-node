import * as test from "blue-tape";
import * as errors from "../errors";
import * as mocks from "../mocks";
import { selectPlayerItem, selectPlayerList, selectPlayerListForTeam } from "./player";

test("selectPlayerList", async t => {
    try {
        selectPlayerList(mocks.statisticStateMock);
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

test("selectPlayerListForTeam", async t => {
    try {
        selectPlayerListForTeam(mocks.statisticStateMock, "");
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

test("selectPlayerItem", async t => {
    try {
        selectPlayerItem(mocks.statisticStateMock, "");
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
