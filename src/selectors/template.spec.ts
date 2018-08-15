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

    //     $templateState = GameyeMock::mockTemplate();
    //     $templateList = GameyeSelector::selectTemplateList($templateState);
    //     $this->assertEquals(count($templateList), 2);
    //     $this->assertEquals($templateList['t1']->templateKey, 't1');
    //     $this->assertEquals($templateList['t2']->templateKey, 't2');
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

    //     $templateState = GameyeMock::mockTemplate();
    //     $templateItem = GameyeSelector::selectTemplateItem($templateState, 't2');
    //     $this->assertEquals($templateItem->templateKey, 't2');
});
