import { transform } from "../utils";

export interface StatePatch {
    path: PropertyKey[];
    value: any;
}

export function reducePatch<TState extends object>(
    state: TState, patches: StatePatch[],
): TState {
    return transform(state, set => {
        for (const patch of patches) {
            set(patch.path as [], patch.value);
        }
    });
}
