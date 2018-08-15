import * as test from "blue-tape";
import { TestContext } from "../test";
import { use } from "../utils";

test(
    "GameyeClient queryTemplate",
    t => use(TestContext.create(), async ({ gameyeClient }) => {
        await gameyeClient.queryTemplate();
    }),
);
