import * as test from "blue-tape";
import * as errors from "../errors";
import * as mocks from "../mocks";
import { selectTeamItem, selectTeamList } from "./team";

test("selectTeamList", async t => {
    try {
        selectTeamList(mocks.statisticStateMock);
        t.fail();
    }
    catch (err) {
        if (err instanceof errors.NotImplemented) {
            t.pass();
            err = null;
        }
        if (err) throw err;
    }
    //     $statisticState = GameyeMock::mockStatistic();
    //     $teamList = GameyeSelector::selectTeamList($statisticState);
    //     $this->assertEquals(count($teamList), 2);
    //     $this->assertEquals($teamList['1']->teamKey, '1');
    //     $this->assertEquals($teamList['1']->name, 'TeamA');
    //     $this->assertEquals($teamList['2']->teamKey, '2');
    //     $this->assertEquals($teamList['2']->name, 'TeamB');
});

test("selectTeamItem", async t => {
    try {
        selectTeamItem(mocks.statisticStateMock, "");
        t.fail();
    }
    catch (err) {
        if (err instanceof errors.NotImplemented) {
            t.pass();
            err = null;
        }
        if (err) throw err;
    }
    //     $statisticState = GameyeMock::mockStatistic();
    //     $teamItem = GameyeSelector::selectTeamItem($statisticState, '2');
    //     $this->assertEquals($teamItem->teamKey, '2');
    //     $this->assertEquals($teamItem->name, 'TeamB');
});
