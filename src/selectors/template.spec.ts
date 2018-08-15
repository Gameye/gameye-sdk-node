import * as test from "blue-tape";
import * as errors from "../errors";
import * as mocks from "../mocks";
import { selectTemplateItem, selectTemplateList } from "./template";

test("selectTemplateList", async t => {
    try {
        selectTemplateList(mocks.templateStateMock);
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
        selectTemplateItem(mocks.templateStateMock, "");
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
