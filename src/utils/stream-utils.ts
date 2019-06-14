import { finished, PassThrough, pipeline, Readable, Writable } from "stream";
import { promisify } from "util";

export const whenFinished = promisify(finished);

export async function writeAll(stream: Writable, data?: string) {
    if (data) stream.end(data);
    else stream.end();
    await whenFinished(stream);
}

export async function readAll(stream: Readable) {
    let data = "";
    stream.on("readable", () => {
        let chunk: any;
        while (Boolean(chunk = stream.read())) {
            data += String(chunk);
        }
    });
    await whenFinished(stream);
    return data;
}

export function streamify(streamPromise: Promise<Readable>): Readable {
    const pass = new PassThrough({
        objectMode: true,
    });

    streamPromise.then(
        stream => pipeline(
            stream,
            pass,
            error => {
                if (error) pass.emit("error", error);
            },
        ),
        error => pass.emit("error", error),
    );

    return pass;
}

export const timeoutToken = Symbol();
export async function withTimeout(promise: Promise<any>, timeout = 100) {
    const result = await Promise.race([
        promise,
        new Promise(resolve => setTimeout(resolve, timeout)).then(() => timeoutToken),
    ]);
    return result;
}
