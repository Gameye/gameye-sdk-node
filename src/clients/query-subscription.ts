import { transform } from "deepkit";
import { EventEmitter } from "events";
import { __values } from "tslib";
import { Destructable } from "../utils";

export interface QueryPatch {
    path: PropertyKey[];
    value: any;
}

export class QuerySubscription<TState extends object> implements Destructable {
    private lastState: TState | undefined;
    private readBuffer = "";

    constructor(private reader: ReadableStreamReader) {
    }

    public async destroy() {
        await this.reader.cancel();
    }

    public async nextState() {
        const { lastState } = this;
        const { patches, more } = await this.nextPatches();
        const nextState = transform<TState>(
            lastState || {} as any,
            ({ set }) => patches.forEach(({ path, value }) => set(path, value)),
        );
        return { nextState, more };
    }

    public async nextPatches() {
        const { line, more } = await this.nextLine();

        const patches: QueryPatch[] = line ? JSON.parse(line) : [];
        return { patches, more };
    }

    private async nextLine() {
        const { reader } = this;

        while (true) {
            const { readBuffer } = this;
            const newlineIndex = readBuffer.indexOf("\n");
            if (newlineIndex >= 0) {
                this.readBuffer = readBuffer.substring(newlineIndex + "\n".length);
                const line = readBuffer.substring(0, newlineIndex);

                return { line, more: true };
            }

            const { chunk, more } = await reader.read();
            if (!more) return { line: "", more: false };
            this.readBuffer += chunk;
        }
    }

}
