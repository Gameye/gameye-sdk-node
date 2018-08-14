import * as test from "blue-tape";
import * as errors from "../errors";
import { GameyeClient } from "./gameye";

test("GameyeClient instantiation", async t => {
    const client = new GameyeClient({
        token: "123",
        endpoint: "http://localhost",
    });
});

test("GameyeClient config errors", async t => {
    try {
        const client = new GameyeClient({
            token: "123",
        });
        t.fail();
    }
    catch (err) {
        if (err instanceof errors.MissingConfigurationField) {
            t.equal(err.fieldName, "endpoint");
            err = null;
        }
        if (err) throw err;
    }

    try {
        const client = new GameyeClient({
            endpoint: "http://localhost",
        });
        t.fail();
    }
    catch (err) {
        if (err instanceof errors.MissingConfigurationField) {
            t.equal(err.fieldName, "token");
            err = null;
        }
        if (err) throw err;
    }
});
