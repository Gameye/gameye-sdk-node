import * as test from "blue-tape";
import { isEmpty } from "./empty";

test("isEmpty", async t => {
    t.equals(isEmpty(""), true);
    t.equals(isEmpty(" "), false);
    t.equals(isEmpty("abc"), false);

    t.equals(isEmpty(0), false);
    t.equals(isEmpty(1), false);

    t.equals(isEmpty(true), false);
    t.equals(isEmpty(false), false);

    t.equals(isEmpty({}), true);
    t.equals(isEmpty({ a: null }), true);
    t.equals(isEmpty({ a: {} }), true);
    t.equals(isEmpty({ a: 1 }), false);
    t.equals(isEmpty({ a: { b: false } }), false);
});
