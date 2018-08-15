import * as test from "blue-tape";
import * as errors from "../errors";
import { GameyeClient } from "./gameye";

test("GameyeClient commandStartMatch", async t => {
    const client = new GameyeClient({
        token: "123",
        endpoint: "http://localhost",
    });
    try {
        client.commandStartMatch(
            "match",
            "game",
            ["location"],
            "template",
            {},
        );
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

test("GameyeClient commandStopMatch", async t => {
    const client = new GameyeClient({
        token: "123",
        endpoint: "http://localhost",
    });
    try {
        client.commandStopMatch(
            "match",
        );
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

test("GameyeClient queryMatch", async t => {
    const client = new GameyeClient({
        token: "123",
        endpoint: "http://localhost",
    });
    try {
        client.queryMatch();
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
