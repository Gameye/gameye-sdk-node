import * as test from "blue-tape";
import { getIn, setIn } from "./deep";

test("getIn", async t => {
    interface TestState {
        t: {
            [key: string]: true,
        };
        f: {
            [key: string]: false,
        };
    }

    const state: TestState = {
        t: {
            1: true,
            2: true,
        },
        f: {
            one: false,
            two: false,
        },
    };
    t.strictEqual(getIn(state, []), state);
    t.strictEqual(getIn(state, ["t"]), state.t);
    t.strictEqual(getIn(state, ["t", "2"]), state.t[2]);
    t.strictEqual(getIn(state, ["f", "2"]), state.f[2]);
});

test("setIn", async t => {
    const value: any = {};
    const state: any = {};

    const state1 = setIn(state, ["1", "2"], value);

    t.notStrictEqual(state1, state);
    t.notDeepEqual(state1, state);
    t.deepEqual(state1, {
        1: {
            2: {},
        },
    });
    t.strictEqual(state1[1][2], value);
});
