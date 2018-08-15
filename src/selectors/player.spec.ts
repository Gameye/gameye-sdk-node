import * as test from "blue-tape";
import * as errors from "../errors";
import * as models from "../models";
import { selectPlayerItem, selectPlayerList, selectPlayerListForTeam } from "./player";

const statisticState: models.StatisticQueryState = {
    statistic: {},
};

test("selectPlayerList", async t => {
    try {
        selectPlayerList(statisticState);
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
        selectPlayerListForTeam(statisticState, "");
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
        selectPlayerItem(statisticState, "");
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
