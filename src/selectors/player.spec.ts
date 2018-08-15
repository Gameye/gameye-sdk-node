import * as test from "blue-tape";
import * as errors from "../errors";
import * as mocks from "../mocks";
import { selectPlayerItem, selectPlayerList, selectPlayerListForTeam } from "./player";

test("selectPlayerList", async t => {
    const playerList = selectPlayerList(mocks.statisticStateMock);
    t.equal(playerList.length, 2);
    t.equal(playerList.filter(i => i.playerKey === "3").length, 1);
    t.equal(playerList.filter(i => i.playerKey === "3")[0].name, "denise");
    t.equal(playerList.filter(i => i.playerKey === "4").length, 1);
    t.equal(playerList.filter(i => i.playerKey === "4")[0].name, "Smashmint");
});

test("selectPlayerListForTeam", async t => {
    const playerList = selectPlayerListForTeam(mocks.statisticStateMock, "1");
    t.equal(playerList.length, 1);
    t.equal(playerList.filter(i => i.playerKey === "3").length, 1);
    t.equal(playerList.filter(i => i.playerKey === "3")[0].name, "denise");
});

test("selectPlayerItem", async t => {
    const playerItem = selectPlayerItem(mocks.statisticStateMock, "4");
    t.ok(playerItem);
    if (playerItem) {
        t.equal(playerItem.playerKey, "4");
        t.equal(playerItem.name, "Smashmint");
    }
});
