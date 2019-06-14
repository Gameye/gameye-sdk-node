import * as stream from "stream";

export class FromJSONTransform extends stream.Transform {

    constructor() {
        super({ objectMode: true });
    }

    public _transform(
        chunk: any,
        encoding: string,
        callback: (error?: Error, data?: any) => void,
    ): void {
        try {
            const str = String(chunk).trim();
            const obj = str ? JSON.parse(str) : undefined;
            callback(undefined, obj);
        }
        catch (error) {
            callback(error, undefined);
        }
    }

}
