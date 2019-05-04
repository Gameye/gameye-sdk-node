import * as test from "blue-tape";
import { TestContext } from "../test";
import { use } from "../utils";

test(
    "GameyeClient commandStartMatch",
    t => use(TestContext.create(), async ({ gameyeClient }) => {
        await gameyeClient.commandStartMatch(
            "match",
            "game",
            ["location"],
            "template",
            {},
            "http://localhost/callback"
        );
    }),
);

test(
    "GameyeClient commandStopMatch",
    t => use(TestContext.create(), async ({ gameyeClient }) => {
        await gameyeClient.commandStopMatch(
            "match",
        );
    }),
);

test(
    "GameyeClient queryMatch",
    t => use(TestContext.create(), async ({ gameyeClient }) => {
        await gameyeClient.queryMatch();
    }),
);
