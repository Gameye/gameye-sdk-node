import * as test from "blue-tape";
import * as errors from "../errors";
import * as mocks from "../mocks";
import { selectTemplateItem, selectTemplateList } from "./template";

test("selectTemplateList", async t => {
    const templateList = selectTemplateList(mocks.templateStateMock);
    t.equal(templateList.length, 2);
    t.equal(templateList.filter(i => i.templateKey === "t1").length, 1);
    t.equal(templateList.filter(i => i.templateKey === "t2").length, 1);
});

test("selectTemplateItem", async t => {
    const templateItem = selectTemplateItem(mocks.templateStateMock, "t2");
    t.ok(templateItem);
    if (templateItem) {
        t.equal(templateItem.templateKey, "t2");
    }
});
