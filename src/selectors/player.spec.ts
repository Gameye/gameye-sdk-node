import * as test from "blue-tape";
import * as errors from "../errors";
import * as mocks from "../mocks";
import { selectPlayerItem, selectPlayerList, selectPlayerListForTeam } from "./player";

test("selectPlayerList", async t => {
    try {
        selectPlayerList(mocks.statisticStateMock);
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
    //     $playerList = GameyeSelector::selectPlayerList($statisticState);
    //     $this->assertEquals(count($playerList), 2);
    //     $this->assertEquals($playerList['3']->playerKey, '3');
    //     $this->assertEquals($playerList['3']->name, 'denise');
    //     $this->assertEquals($playerList['4']->playerKey, '4');
    //     $this->assertEquals($playerList['4']->name, 'Smashmint');
});

test("selectPlayerListForTeam", async t => {
    try {
        selectPlayerListForTeam(mocks.statisticStateMock, "");
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
    //     $playerList = GameyeSelector::selectPlayerListForTeam($statisticState, '1');
    //     $this->assertEquals(count($playerList), 1);
    //     $this->assertEquals($playerList['3']->playerKey, '3');
    //     $this->assertEquals($playerList['3']->name, 'denise');
});

test("selectPlayerItem", async t => {
    try {
        selectPlayerItem(mocks.statisticStateMock, "");
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
    //     $playerItem = GameyeSelector::selectPlayerItem($statisticState, '4');
    //     $this->assertEquals($playerItem->playerKey, '4');
    //     $this->assertEquals($playerItem->name, 'Smashmint');
});
