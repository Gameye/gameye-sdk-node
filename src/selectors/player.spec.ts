import * as test from "blue-tape";
import * as errors from "../errors";
import { selectPlayerItem, selectPlayerList, selectPlayerListForTeam } from "./player";

test("selectPlayerList", async t => {
    try {
        selectPlayerList({});
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
        selectPlayerListForTeam({}, "");
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
        selectPlayerItem({}, "");
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
