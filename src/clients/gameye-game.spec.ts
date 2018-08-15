import * as test from "blue-tape";
import { TestContext } from "../test";
import { use } from "../utils";

test(
    "GameyeClient queryGame",
    t => use(TestContext.create(), async ({ gameyeClient }) => {
        await gameyeClient.queryGame();
    }),
);
