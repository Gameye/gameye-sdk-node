import * as test from "blue-tape";
import * as errors from "../errors";
import { selectTemplateItem, selectTemplateList } from "./template";

test("selectTemplateList", async t => {
    try {
        selectTemplateList({});
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

test("selectTemplateItem", async t => {
    try {
        selectTemplateItem({}, "");
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
