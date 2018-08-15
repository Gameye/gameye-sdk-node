import * as test from "blue-tape";
import * as errors from "../errors";
import * as models from "../models";
import { selectTeamItem, selectTeamList } from "./team";

const statisticState: models.StatisticQueryState = {
    statistic: {},
};

test("selectTeamList", async t => {
    try {
        selectTeamList(statisticState);
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

test("selectTeamItem", async t => {
    try {
        selectTeamItem(statisticState, "");
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
