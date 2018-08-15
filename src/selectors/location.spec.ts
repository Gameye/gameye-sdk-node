import * as test from "blue-tape";
import * as mocks from "../mocks";
import { selectLocationListForGame } from "./location";

test("selectLocationListForGame", async t => {
    const locationList = selectLocationListForGame(mocks.gameStateMock, "test");
    t.equal(locationList.length, 1);
    t.equal(locationList.filter(i => i.locationKey === "local").length, 1);
});
