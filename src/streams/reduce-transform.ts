import * as stream from "stream";

export class ReduceTransform<TState = any, TEvent = any> extends stream.Transform {

    private state: TState;

    constructor(
        fn: (previous: TState, event: TEvent) => TState,
        initialState: TState,
    );
    constructor(
        fn: (state?: TState, event?: TEvent) => TState,
        initialState?: TState,
    );
    constructor(
        private readonly fn: (state?: TState, event?: TEvent) => TState,
        initialState?: TState,
    ) {
        super({ objectMode: true });

        if (initialState === undefined) {
            this.state = fn();
        }
        else {
            this.state = initialState;
        }
    }

    public _transform(
        chunk: any,
        encoding: string,
        callback: (error?: Error, data?: any) => void,
    ): void {
        const { fn } = this;
        let { state } = this;
        this.state = state = fn(state, chunk);
        callback(undefined, state);
    }

}
