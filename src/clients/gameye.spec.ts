import * as test from "blue-tape";
import * as errors from "../errors";
import { TestContext } from "../test";
import { use } from "../utils";
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

test(
    "GameyeClient subscriptions",
    t => use(TestContext.create(), async ({ gameyeClient, apiTestServer }) => {
        const subscription = await gameyeClient.subscribe("testing", {});

        apiTestServer.emitPatches([
            { path: ["number"], value: 1 },
        ]);
        {
            const state = await subscription.nextState();
            t.deepEqual(state, { number: 1 });
        }

        apiTestServer.emitPatches([
            { path: ["number"], value: 2 },
        ]);
        {
            const state = await subscription.nextState();
            t.deepEqual(state, { number: 2 });
        }

        apiTestServer.emitPatches([
            { path: ["character"], value: "a" },
        ]);
        {
            const state = await subscription.nextState();
            t.deepEqual(state, { number: 2, character: "a" });
        }

        await subscription.destroy();
    }),
);
