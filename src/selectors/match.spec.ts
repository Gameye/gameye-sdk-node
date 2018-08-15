import * as test from "blue-tape";
import * as errors from "../errors";
import * as models from "../models";
import { selectMatchItem, selectMatchList, selectMatchListForGame } from "./match";

const matchState: models.MatchQueryState = {
    match: {},
};

test("selectMatchList", async t => {
    try {
        selectMatchList(matchState);
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
        selectMatchListForGame(matchState, "");
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
        selectMatchItem(matchState, "");
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
