import * as test from "blue-tape";
import * as errors from "../errors";
import * as mocks from "../mocks";
import { selectMatchItem, selectMatchList, selectMatchListForGame } from "./match";

test("selectMatchList", async t => {
    const matchList = selectMatchList(mocks.matchStateMock);
    t.equal(matchList.length, 2);
    t.equal(matchList.filter(i => i.matchKey === "test-match-123").length, 1);
    t.equal(matchList.filter(i => i.matchKey === "test-match-456").length, 1);
});

test("selectMatchListForGame", async t => {
    const matchList = selectMatchListForGame(mocks.matchStateMock, "test");
    t.equal(matchList.length, 1);
    t.equal(matchList.filter(i => i.matchKey === "test-match-123").length, 1);
});

test("selectMatchItem", async t => {
    const matchItem = selectMatchItem(mocks.matchStateMock, "test-match-123");
    t.ok(matchItem);
    if (matchItem) {
        t.equal(matchItem.matchKey, "test-match-123");
    }
});
