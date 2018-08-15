import * as test from "blue-tape";
import * as errors from "../errors";
import * as mocks from "../mocks";
import { selectTeamItem, selectTeamList } from "./team";

test("selectTeamList", async t => {
    const teamList = selectTeamList(mocks.statisticStateMock);
    t.equal(teamList.length, 2);
    t.equal(teamList.filter(i => i.teamKey === "1").length, 1);
    t.equal(teamList.filter(i => i.teamKey === "1")[0].name, "TeamA");
    t.equal(teamList.filter(i => i.teamKey === "2").length, 1);
    t.equal(teamList.filter(i => i.teamKey === "2")[0].name, "TeamB");
});

test("selectTeamItem", async t => {
    const teamItem = selectTeamItem(mocks.statisticStateMock, "2");
    t.ok(teamItem);
    if (teamItem) {
        t.equal(teamItem.teamKey, "2");
        t.equal(teamItem.name, "TeamB");
    }
});
