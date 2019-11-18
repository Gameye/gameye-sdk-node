import * as test from "blue-tape";
import { TestContext } from "../test";
import { use } from "../utils";

test(
    "GameyeClient commandSessionRun",
    t => use(TestContext.create(), async ({ gameyeClient }) => {
        await gameyeClient.commandSessionRun(
            "id",
            "image",
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
            "id",
        );
    }),
);

test(
    "GameyeClient querySession",
    t => use(TestContext.create(), async ({ gameyeClient }) => {
        await gameyeClient.querySession();
    }),
);

test(
    "GameyeClient querySessionArtifacts",
    t => use(TestContext.create(), async ({ gameyeClient }) => {
        await gameyeClient.querySessionArtifacts("id");
    }),
);
