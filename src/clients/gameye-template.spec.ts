import * as test from "blue-tape";
import * as errors from "../errors";
import { GameyeClient } from "./gameye";

test("GameyeClient queryTemplate", async t => {
    const client = new GameyeClient({
        token: "123",
        endpoint: "http://localhost",
    });
    try {
        client.queryTemplate();
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
