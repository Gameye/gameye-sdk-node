import { transform } from "deepkit";
import * as stream from "stream";
import { Destructable } from "../utils";

export interface QueryPatch {
    path: PropertyKey[];
    value: any;
}

export class QuerySubscription<TState extends object> implements Destructable {
    private destructedPromise!: Promise<boolean>;
    private lastState: TState | undefined;
    private readBuffer = "";

    constructor(private reader: stream.Readable) {
        this.initializeReader();
    }

    public async destroy() {
        this.reader.destroy();
    }

    public async nextState() {
        const { lastState } = this;
        const patches = await this.nextPatches();
        if (patches === false) return false;

        const nextState = transform<TState>(
            lastState || {} as any,
            ({ set }) => patches.forEach(({ path, value }) => set(path, value)),
        );
        this.lastState = nextState;
        return nextState;
    }

    private async nextPatches() {
        const line = await this.nextLine();
        if (line === false) return false;

        const patches: QueryPatch[] = line ? JSON.parse(line) : [];
        return patches;
    }

    private initializeReader() {
        const { reader } = this;
        reader.on("data", chunk => {
            this.readBuffer += chunk;
        });
        this.destructedPromise = new Promise(
            resolve => reader.once("close", () => resolve(false)),
        );
    }

    private async nextLine() {
        while (true) {
            const { readBuffer } = this;
            const newlineIndex = readBuffer.indexOf("\n");
            if (newlineIndex >= 0) {
                this.readBuffer = readBuffer.substring(newlineIndex + "\n".length);
                const line = readBuffer.substring(0, newlineIndex);
                return line;
            }

            const result = await Promise.race([
                this.destructedPromise,
                await new Promise(resolve => this.reader.once("data", resolve)),
            ]);

            if (result === false) return false;
        }
    }

}
