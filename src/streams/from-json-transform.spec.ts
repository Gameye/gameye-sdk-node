import * as test from "blue-tape";
import { FromJSONTransform } from "./from-json-transform";

test("from-json-transform", async t => {
    const expect = [
        "aa",
        "bb",
        1,
        2,
        { x: true },
        { y: false },
    ];

    const jsonTransform = new FromJSONTransform();
    jsonTransform.on("data", chunk => {
        t.deepEqual(chunk, expect.shift());
    });

    const write = (chunk: any) => new Promise(
        (resolve, reject) => jsonTransform.write(chunk, error => error ? reject(error) : resolve()),
    );
    const end = () => new Promise(
        resolve => jsonTransform.end(resolve),
    );

    await write("  ");
    await write(`\n"aa"`);
    await write("");
    await write(`"bb"\t`);
    await write("");
    await write(`1\r`);
    await write(`\t2\t`);
    await write(`{"x":true}`);
    await write(`{"y":false}\n\n\n`);
    await end();

    t.equal(expect.length, 0);
});
