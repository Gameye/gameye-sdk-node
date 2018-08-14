import * as test from "blue-tape";
import * as errors from "../errors";
import { selectTeamItem, selectTeamList } from "./team";

test("selectTeamList", async t => {
    try {
        selectTeamList({});
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
        selectTeamItem({}, "");
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
