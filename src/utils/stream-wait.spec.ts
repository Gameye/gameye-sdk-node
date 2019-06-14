import * as test from "blue-tape";
import { PassThrough } from "stream";
import { streamWait } from "./stream-wait";

test("stream-wait", async t => {
    const stream = new PassThrough({ objectMode: true });

    const write = (chunk: any) => new Promise(
        (resolve, reject) => stream.write(chunk, error => error ? reject(error) : resolve()),
    );
    const end = () => new Promise(
        resolve => stream.end(resolve),
    );

    write("aa");
    write("bb");
    write("cc");

    {
        const wait = streamWait<string>(stream, (c) => c === "bb");
        const chunk = await wait;
        t.equal(chunk, "bb");
    }

    {
        const wait = streamWait<string>(stream, () => true);
        const chunk = await wait;
        t.equal(chunk, "cc");
    }

    await end();
});
