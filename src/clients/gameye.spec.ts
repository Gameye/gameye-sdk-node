import * as test from "blue-tape";
import * as errors from "../errors";
import { TestContext } from "../test";
import { StatePatch, streamWait, use, whenFinished } from "../utils";
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
            const state = await streamWait(subscription);
            t.deepEqual(state, { number: 1 });
        }

        apiTestServer.emitPatches([
            { path: ["number"], value: 2 },
        ]);
        {
            const state = await streamWait(subscription);
            t.deepEqual(state, { number: 2 });
        }

        apiTestServer.emitPatches([
            { path: ["character"], value: "a" },
        ]);
        {
            const state = await streamWait(subscription);
            t.deepEqual(state, { number: 2, character: "a" });
        }

        // it's very important to always cleanup a subscription!
        subscription.destroy();
        await whenFinished(subscription);
    }),
);

test(
    "GameyeClient subscriptions async iterable",
    t => use(TestContext.create(), async ({ gameyeClient, apiTestServer }) => {
        const subscription = await gameyeClient.subscribe("testing", {});

        const patches = [
            [{ path: ["number"], value: 1 }],
            [{ path: ["number"], value: 2 }],
            [{ path: ["character"], value: "a" }],
        ];
        const expectedStates = [
            { number: 1 },
            { number: 2 },
            { number: 2, character: "a" },
        ];

        let patch: StatePatch[] | undefined;
        // tslint:disable-next-line: no-conditional-assignment
        while (patch = patches.shift()) {
            apiTestServer.emitPatches(patch);
        }

        for await (const state of subscription) {
            const expectedState = expectedStates.shift();

            t.deepEqual(state, expectedState);

            if (expectedStates.length === 0) break;
        }

        // it's very important to always cleanup a subscription!
        subscription.destroy();
        await whenFinished(subscription);
    }),
);
