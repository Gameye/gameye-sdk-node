import * as test from "blue-tape";
import * as errors from "../errors";
import * as models from "../models";
import { selectTemplateItem, selectTemplateList } from "./template";

const templateState: models.TemplateQueryState = {
    template: {},
};

test("selectTemplateList", async t => {
    try {
        selectTemplateList(templateState);
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
        selectTemplateItem(templateState, "");
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
