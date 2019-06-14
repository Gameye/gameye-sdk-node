import * as stream from "stream";

export class SplitTransform extends stream.Duplex {

    private buffer = "";
    private flushing = false;

    constructor(
        private separator = /\r?\n/,
    ) {
        super({
            readableObjectMode: true,
            writableObjectMode: false,
        });
    }

    //#region Writable

    public _write(
        chunk: any,
        encoding: string,
        callback: (error?: Error | null) => void,
    ): void {
        this.buffer += String(chunk);
        this.flushBuffer();
        callback();
    }

    public _final(
        callback: (error?: Error | null) => void,
    ): void {
        this.flushBuffer();
        callback();
    }

    //#endregion

    //#region Readable

    public _read(size: number): void {
        this.flushing = true;
        this.flushBuffer();
    }

    //#endregion

    //#region Duplex

    public _destroy(
        destroyError: Error | null,
        callback: (error: Error | null) => void,
    ): void {
        callback(destroyError);
    }

    //#endregion

    private flushBuffer() {
        while (this.flushing) {
            const part = this.nextPart();
            if (this.writable && part === null) {
                break;
            }
            this.flushing = this.push(part);
        }
    }

    private nextPart() {
        const match = this.separator.exec(this.buffer);
        if (!match) return null;

        const part = this.buffer.substring(0, match.index);
        this.buffer = this.buffer.substring(match.index + match[0].length);
        return part;
    }

}
