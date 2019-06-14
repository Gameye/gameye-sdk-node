import * as test from "blue-tape";
import { ReduceTransform } from "./reduce-transform";

test("reduce-transform", async t => {
    const expect = [
        0,
        1,
        3,
        6,
    ];

    const reduceTransform = new ReduceTransform(
        (p = 0, c = 0) => p + c,
    );
    reduceTransform.on("data", chunk => {
        t.equal(chunk, expect.shift());
    });

    const write = (chunk: any) => new Promise(
        (resolve, reject) => reduceTransform.write(chunk, error => error ? reject(error) : resolve()),
    );
    const end = () => new Promise(
        resolve => reduceTransform.end(resolve),
    );

    await write(0);
    await write(1);
    await write(2);
    await write(3);
    await end();

    t.equal(expect.length, 0);
});
