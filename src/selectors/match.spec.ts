import * as test from "blue-tape";
import * as errors from "../errors";
import * as mocks from "../mocks";
import { selectMatchItem, selectMatchList, selectMatchListForGame } from "./match";

test("selectMatchList", async t => {
    try {
        selectMatchList(mocks.matchStateMock);
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

test("selectMatchListForGame", async t => {
    try {
        selectMatchListForGame(mocks.matchStateMock, "");
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

test("selectMatchItem", async t => {
    try {
        selectMatchItem(mocks.matchStateMock, "");
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
