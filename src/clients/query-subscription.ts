import { transform } from "deepkit";
import * as stream from "stream";
import { Destructable } from "../utils";

export interface QueryPatch {
    path: PropertyKey[];
    value: any;
}

const closed = Symbol();

export class QuerySubscription<TState extends object> implements Destructable {
    private lastState: TState | undefined;
    private readBuffer = "";
    private closePromise!: Promise<typeof closed>;

    constructor(private reader: stream.Readable) {
        this.initializeReader();
    }

    public async destroy() {
        this.reader.destroy();
    }

    public async nextState() {
        const { lastState } = this;
        const { patches, more } = await this.nextPatches();
        const state = transform<TState>(
            lastState || {} as any,
            ({ set }) => patches.forEach(({ path, value }) => set(path, value)),
        );
        return { state, more };
    }

    private async nextPatches() {
        const { line, more } = await this.nextLine();

        const patches: QueryPatch[] = line ? JSON.parse(line) : [];
        return { patches, more };
    }

    private initializeReader() {
        const { reader } = this;
        reader.on("data", chunk => {
            this.readBuffer += chunk;
        });
        this.closePromise = new Promise(resolve => reader.once("close", () => resolve(closed)));
        reader.resume();
    }

    private async nextLine() {
        while (true) {
            const { readBuffer } = this;
            const newlineIndex = readBuffer.indexOf("\n");
            if (newlineIndex >= 0) {
                this.readBuffer = readBuffer.substring(newlineIndex + "\n".length);
                const line = readBuffer.substring(0, newlineIndex);

                return { line, more: true };
            }

            const result = await Promise.race([
                this.closePromise,
                await new Promise(resolve => this.reader.once("data", resolve)),
            ]);

            if (result === closed) return { line: "", more: false };
        }
    }

}
