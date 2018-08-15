import * as test from "blue-tape";
import * as errors from "../errors";
import * as mocks from "../mocks";
import { selectMatchItem, selectMatchList, selectMatchListForGame } from "./match";

test("selectMatchList", async t => {
    try {
        selectMatchList(mocks.matchStateMock);
        t.fail();
    }
    catch (err) {
        if (err instanceof errors.NotImplemented) {
            t.pass();
            err = null;
        }
        if (err) throw err;
    }
    //     $matchState = GameyeMock::mockMatch();
    //     $matchList = GameyeSelector::selectMatchList($matchState);
    //     $this->assertEquals(count($matchList), 2);
    //     $this->assertEquals($matchList['test-match-123']->matchKey, 'test-match-123');
    //     $this->assertEquals($matchList['test-match-456']->matchKey, 'test-match-456');
});

test("selectMatchListForGame", async t => {
    try {
        selectMatchListForGame(mocks.matchStateMock, "");
        t.fail();
    }
    catch (err) {
        if (err instanceof errors.NotImplemented) {
            t.pass();
            err = null;
        }
        if (err) throw err;
    }
    //     $matchState = GameyeMock::mockMatch();
    //     $matchList = GameyeSelector::selectMatchListForGame($matchState, 'test');
    //     $this->assertEquals(count($matchList), 1);
    //     $this->assertEquals($matchList['test-match-123']->gameKey, 'test');
});

test("selectMatchItem", async t => {
    try {
        selectMatchItem(mocks.matchStateMock, "");
        t.fail();
    }
    catch (err) {
        if (err instanceof errors.NotImplemented) {
            t.pass();
            err = null;
        }
        if (err) throw err;
    }
    //     $matchState = GameyeMock::mockMatch();
    //     $matchItem = GameyeSelector::selectMatchItem($matchState, 'test-match-123');
    //     $this->assertEquals($matchItem->matchKey, 'test-match-123');
});
