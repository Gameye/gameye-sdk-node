import * as test from "blue-tape";
import { PassThrough } from "stream";
import { readAll, streamify, timeoutToken, withTimeout } from "./stream-utils";

test("with-timeout", async t => {
    {
        const resolvedPromise = Promise.resolve("a");
        t.equal(await withTimeout(resolvedPromise), "a");
    }

    {
        const pendingPromise = new Promise(resolve => 0);
        t.equal(await withTimeout(pendingPromise), timeoutToken);
    }

    {
        const rejectedPromise = Promise.reject("a");
        try {
            await withTimeout(rejectedPromise);
            t.fail();
        }
        catch (error) {
            t.equal(error, "a");
        }
    }
});

test("read-all", async t => {
    const pass = new PassThrough();

    const promise = readAll(pass);

    t.equal(await withTimeout(promise), timeoutToken);
    pass.write("a");
    t.equal(await withTimeout(promise), timeoutToken);

    pass.end("b");
    t.equal(await withTimeout(promise), "ab");
});

test("streamify data event", async t => {
    const pass = new PassThrough({ objectMode: true });
    const streamPromise = Promise.resolve(pass);
    const stream = streamify(streamPromise);

    const dataPromise = new Promise(resolve => stream.once("data", resolve));
    pass.write("a");
    t.equal(await dataPromise, "a");
});

test("streamify end event", async t => {
    const pass = new PassThrough({ objectMode: true });
    const streamPromise = Promise.resolve(pass);
    const stream = streamify(streamPromise);

    const dataPromise = new Promise(resolve => stream.once("data", resolve));
    pass.write("data");
    await dataPromise;

    const endPromise = new Promise(resolve => stream.once("end", resolve));
    pass.end();
    t.notEqual(await withTimeout(endPromise), timeoutToken);
});

test("streamify close event", async t => {
    const pass = new PassThrough({ objectMode: true });
    const streamPromise = Promise.resolve(pass);
    const stream = streamify(streamPromise);

    t.notEqual(await withTimeout(streamPromise), timeoutToken);

    const closePromise = new Promise(resolve => stream.once("close", resolve));
    pass.destroy();
    t.notEqual(await withTimeout(closePromise), timeoutToken);
});

test("streamify error event", async t => {
    const pass = new PassThrough({ objectMode: true });
    const streamPromise = Promise.resolve(pass);
    const stream = streamify(streamPromise);

    t.notEqual(await withTimeout(streamPromise), timeoutToken);

    const errorPromise = new Promise(resolve => stream.once("error", resolve));
    pass.emit("error", "a");
    t.equal(await withTimeout(errorPromise), "a");
});
