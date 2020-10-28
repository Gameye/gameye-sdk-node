import * as test from "blue-tape";
import { transform } from "./transform";

interface Src {
    a: string;
    b: {
        c: string,
        d: { [key: string]: string },
    };
    2: number;
}

const src: Src = Object.freeze({
    a: "a",
    b: Object.freeze({
        c: "bc",
        d: Object.freeze({ 1: "bd1" }),
    }),
    2: 2,
});

test("transformer get", async t => {

    const dst = transform(src, (set, get) => {
        t.equal(get(["a"]), "a");
        t.equal(get(["b", "c"]), "bc");
        t.equal(get(["b", "d", "1"]), "bd1");
        t.equal(get([2]), 2);
        t.equal(get(["b", "d", "3"], 4), 4);

        t.equal(get([]), src);
        t.deepEqual(get(["b", "d"]), { 1: "bd1" });
    });
    t.equal(dst, src);

});

test("transformer set", async t => {

    {
        const dst = transform(src, (set, get) => {
            set(["a"], "aa");
            t.equal(get(["a"]), "aa");
        });
        t.notEqual(dst, src);

        t.notEqual(dst.a, src.a);
        t.equal(dst.b, src.b);
        t.equal(dst[2], src[2]);

        t.equal(dst.a, "aa");
    }

    {
        const dst = transform(src, (set, get) => {
            set(["b", "c"], "cb");
            t.equal(get(["b", "c"]), "cb");
        });
        t.notEqual(dst, src);

        t.equal(dst.a, src.a);
        t.notEqual(dst.b, src.b);
        t.equal(dst[2], src[2]);

        t.equal(dst.b.c, "cb");
    }

});
