import * as test from "blue-tape";
import * as errors from "../errors";
import { selectMatchItem, selectMatchList, selectMatchListForGame } from "./match";

test("selectMatchList", async t => {
    try {
        selectMatchList({});
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
        selectMatchListForGame({}, "");
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
        selectMatchItem({}, "");
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
