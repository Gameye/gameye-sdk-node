import * as test from "blue-tape";
import { TestContext } from "../test";
import { use } from "../utils";

test(
    "GameyeClient commandSessionRun",
    t => use(TestContext.create(), async ({ gameyeClient }) => {
        await gameyeClient.commandSessionRun(
            "match",
            "game",
            "location",
            undefined,
            [],
            { game: { type: "tcp", port: 9090 } },
            "http://localhost/callback",
        );
    }),
);

test(
    "GameyeClient commandSessionCancel",
    t => use(TestContext.create(), async ({ gameyeClient }) => {
        await gameyeClient.commandSessionCancel(
            "match",
        );
    }),
);

test(
    "GameyeClient querySession",
    t => use(TestContext.create(), async ({ gameyeClient }) => {
        await gameyeClient.querySession();
    }),
);
