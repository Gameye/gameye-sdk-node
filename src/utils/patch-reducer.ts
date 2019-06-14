import { transform } from "deepkit";

export interface QueryPatch {
    path: PropertyKey[];
    value: any;
}

export function reducePatch<TState extends object>(
    state: TState, patches: QueryPatch[],
): TState {
    return transform(state, ({ set }) => {
        for (const patch of patches) {
            set(patch.path, patch.value);
        }
    });
}
