import { transform } from "./transform";

//#region overloads

export function getIn<
    TObject extends object,
    T1 extends keyof TObject,
    T2 extends keyof TObject[T1],
    T3 extends keyof TObject[T1][T2],
    T4 extends keyof TObject[T1][T2][T3],
    T5 extends keyof TObject[T1][T2][T3][T4],
    T6 extends keyof TObject[T1][T2][T3][T4][T5],
    T7 extends keyof TObject[T1][T2][T3][T4][T5][T6],
    T8 extends keyof TObject[T1][T2][T3][T4][T5][T6][T7],
    T9 extends keyof TObject[T1][T2][T3][T4][T5][T6][T7][T8],
    T10 extends keyof TObject[T1][T2][T3][T4][T5][T6][T7][T8][T9],
    TDefault = undefined,
    >(
        target: TObject,
        path: [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10],
        defaultValue?: TDefault,
): TObject[T1][T2][T3][T4][T5][T6][T7][T8][T9][T10] | TDefault;

export function getIn<
    TObject extends object,
    T1 extends keyof TObject,
    T2 extends keyof TObject[T1],
    T3 extends keyof TObject[T1][T2],
    T4 extends keyof TObject[T1][T2][T3],
    T5 extends keyof TObject[T1][T2][T3][T4],
    T6 extends keyof TObject[T1][T2][T3][T4][T5],
    T7 extends keyof TObject[T1][T2][T3][T4][T5][T6],
    T8 extends keyof TObject[T1][T2][T3][T4][T5][T6][T7],
    T9 extends keyof TObject[T1][T2][T3][T4][T5][T6][T7][T8],
    TDefault = undefined,
    >(
        target: TObject,
        path: [T1, T2, T3, T4, T5, T6, T7, T8, T9],
        defaultValue?: TDefault,
): TObject[T1][T2][T3][T4][T5][T6][T7][T8][T9] | TDefault;

export function getIn<
    TObject extends object,
    T1 extends keyof TObject,
    T2 extends keyof TObject[T1],
    T3 extends keyof TObject[T1][T2],
    T4 extends keyof TObject[T1][T2][T3],
    T5 extends keyof TObject[T1][T2][T3][T4],
    T6 extends keyof TObject[T1][T2][T3][T4][T5],
    T7 extends keyof TObject[T1][T2][T3][T4][T5][T6],
    T8 extends keyof TObject[T1][T2][T3][T4][T5][T6][T7],
    TDefault = undefined,
    >(
        target: TObject,
        path: [T1, T2, T3, T4, T5, T6, T7, T8],
        defaultValue?: TDefault,
): TObject[T1][T2][T3][T4][T5][T6][T7][T8] | TDefault;

export function getIn<
    TObject extends object,
    T1 extends keyof TObject,
    T2 extends keyof TObject[T1],
    T3 extends keyof TObject[T1][T2],
    T4 extends keyof TObject[T1][T2][T3],
    T5 extends keyof TObject[T1][T2][T3][T4],
    T6 extends keyof TObject[T1][T2][T3][T4][T5],
    T7 extends keyof TObject[T1][T2][T3][T4][T5][T6],
    TDefault = undefined,
    >(
        target: TObject,
        path: [T1, T2, T3, T4, T5, T6, T7],
        defaultValue?: TDefault,
): TObject[T1][T2][T3][T4][T5][T6][T7] | TDefault;

export function getIn<
    TObject extends object,
    T1 extends keyof TObject,
    T2 extends keyof TObject[T1],
    T3 extends keyof TObject[T1][T2],
    T4 extends keyof TObject[T1][T2][T3],
    T5 extends keyof TObject[T1][T2][T3][T4],
    T6 extends keyof TObject[T1][T2][T3][T4][T5],
    TDefault = undefined,
    >(
        target: TObject,
        path: [T1, T2, T3, T4, T5, T6],
        defaultValue?: TDefault,
): TObject[T1][T2][T3][T4][T5][T6] | TDefault;

export function getIn<
    TObject extends object,
    T1 extends keyof TObject,
    T2 extends keyof TObject[T1],
    T3 extends keyof TObject[T1][T2],
    T4 extends keyof TObject[T1][T2][T3],
    T5 extends keyof TObject[T1][T2][T3][T4],
    TDefault = undefined,
    >(
        target: TObject,
        path: [T1, T2, T3, T4, T5],
        defaultValue?: TDefault,
): TObject[T1][T2][T3][T4][T5] | TDefault;

export function getIn<
    TObject extends object,
    T1 extends keyof TObject,
    T2 extends keyof TObject[T1],
    T3 extends keyof TObject[T1][T2],
    T4 extends keyof TObject[T1][T2][T3],
    TDefault = undefined,
    >(
        target: TObject,
        path: [T1, T2, T3, T4],
        defaultValue?: TDefault,
): TObject[T1][T2][T3][T4] | TDefault;

export function getIn<
    TObject extends object,
    T1 extends keyof TObject,
    T2 extends keyof TObject[T1],
    T3 extends keyof TObject[T1][T2],
    TDefault = undefined,
    >(
        target: TObject,
        path: [T1, T2, T3],
        defaultValue?: TDefault,
): TObject[T1][T2][T3] | TDefault;

export function getIn<
    TObject extends object,
    T1 extends keyof TObject,
    T2 extends keyof TObject[T1],
    TDefault = undefined,
    >(
        target: TObject,
        path: [T1, T2],
        defaultValue?: TDefault,
): TObject[T1][T2] | TDefault;

export function getIn<
    TObject extends object,
    T1 extends keyof TObject,
    TDefault = undefined,
    >(
        target: TObject,
        path: [T1],
        defaultValue?: TDefault,
): TObject[T1] | TDefault;

export function getIn<
    TObject extends object,
    TDefault = undefined,
    >(
        target: TObject,
        path: [],
        defaultValue?: TDefault,
): TObject | TDefault;

//#endregion

export function getIn<
    TObject extends object,
    TDefault = undefined,
    >(
        target: TObject,
        path: PropertyKey[],
        defaultValue?: TDefault,
): unknown | TDefault {
    let found: any = target;
    for (const key of path) {
        if (typeof found !== "object") throw new Error(`${found} is not an object`);
        if (found[key] === undefined) return defaultValue;
        found = found[key];
    }
    return found;
}

//#region overloads

export function setIn<
    TObject extends object,
    T1 extends keyof TObject,
    T2 extends keyof TObject[T1],
    T3 extends keyof TObject[T1][T2],
    T4 extends keyof TObject[T1][T2][T3],
    T5 extends keyof TObject[T1][T2][T3][T4],
    T6 extends keyof TObject[T1][T2][T3][T4][T5],
    T7 extends keyof TObject[T1][T2][T3][T4][T5][T6],
    T8 extends keyof TObject[T1][T2][T3][T4][T5][T6][T7],
    T9 extends keyof TObject[T1][T2][T3][T4][T5][T6][T7][T8],
    T10 extends keyof TObject[T1][T2][T3][T4][T5][T6][T7][T8][T9],
    >(
        target: TObject,
        path: [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10],
        value: TObject[T1][T2][T3][T4][T5][T6][T7][T8][T9][T10] | undefined,
        mutate?: boolean,
): TObject;

export function setIn<
    TObject extends object,
    T1 extends keyof TObject,
    T2 extends keyof TObject[T1],
    T3 extends keyof TObject[T1][T2],
    T4 extends keyof TObject[T1][T2][T3],
    T5 extends keyof TObject[T1][T2][T3][T4],
    T6 extends keyof TObject[T1][T2][T3][T4][T5],
    T7 extends keyof TObject[T1][T2][T3][T4][T5][T6],
    T8 extends keyof TObject[T1][T2][T3][T4][T5][T6][T7],
    T9 extends keyof TObject[T1][T2][T3][T4][T5][T6][T7][T8],
    >(
        target: TObject,
        path: [T1, T2, T3, T4, T5, T6, T7, T8, T9],
        value: TObject[T1][T2][T3][T4][T5][T6][T7][T8][T9] | undefined,
        mutate?: boolean,
): TObject;

export function setIn<
    TObject extends object,
    T1 extends keyof TObject,
    T2 extends keyof TObject[T1],
    T3 extends keyof TObject[T1][T2],
    T4 extends keyof TObject[T1][T2][T3],
    T5 extends keyof TObject[T1][T2][T3][T4],
    T6 extends keyof TObject[T1][T2][T3][T4][T5],
    T7 extends keyof TObject[T1][T2][T3][T4][T5][T6],
    T8 extends keyof TObject[T1][T2][T3][T4][T5][T6][T7],
    >(
        target: TObject,
        path: [T1, T2, T3, T4, T5, T6, T7, T8],
        value: TObject[T1][T2][T3][T4][T5][T6][T7][T8] | undefined,
        mutate?: boolean,
): TObject;

export function setIn<
    TObject extends object,
    T1 extends keyof TObject,
    T2 extends keyof TObject[T1],
    T3 extends keyof TObject[T1][T2],
    T4 extends keyof TObject[T1][T2][T3],
    T5 extends keyof TObject[T1][T2][T3][T4],
    T6 extends keyof TObject[T1][T2][T3][T4][T5],
    T7 extends keyof TObject[T1][T2][T3][T4][T5][T6],
    >(
        target: TObject,
        path: [T1, T2, T3, T4, T5, T6, T7],
        value: TObject[T1][T2][T3][T4][T5][T6][T7] | undefined,
        mutate?: boolean,
): TObject;

export function setIn<
    TObject extends object,
    T1 extends keyof TObject,
    T2 extends keyof TObject[T1],
    T3 extends keyof TObject[T1][T2],
    T4 extends keyof TObject[T1][T2][T3],
    T5 extends keyof TObject[T1][T2][T3][T4],
    T6 extends keyof TObject[T1][T2][T3][T4][T5],
    >(
        target: TObject,
        path: [T1, T2, T3, T4, T5, T6],
        value: TObject[T1][T2][T3][T4][T5][T6] | undefined,
        mutate?: boolean,
): TObject;

export function setIn<
    TObject extends object,
    T1 extends keyof TObject,
    T2 extends keyof TObject[T1],
    T3 extends keyof TObject[T1][T2],
    T4 extends keyof TObject[T1][T2][T3],
    T5 extends keyof TObject[T1][T2][T3][T4],
    >(
        target: TObject,
        path: [T1, T2, T3, T4, T5],
        value: TObject[T1][T2][T3][T4][T5] | undefined,
        mutate?: boolean,
): TObject;

export function setIn<
    TObject extends object,
    T1 extends keyof TObject,
    T2 extends keyof TObject[T1],
    T3 extends keyof TObject[T1][T2],
    T4 extends keyof TObject[T1][T2][T3],
    >(
        target: TObject,
        path: [T1, T2, T3, T4],
        value: TObject[T1][T2][T3][T4] | undefined,
        mutate?: boolean,
): TObject;

export function setIn<
    TObject extends object,
    T1 extends keyof TObject,
    T2 extends keyof TObject[T1],
    T3 extends keyof TObject[T1][T2],
    >(
        target: TObject,
        path: [T1, T2, T3],
        value: TObject[T1][T2][T3] | undefined,
        mutate?: boolean,
): TObject;

export function setIn<
    TObject extends object,
    T1 extends keyof TObject,
    T2 extends keyof TObject[T1],
    >(
        target: TObject,
        path: [T1, T2],
        value: TObject[T1][T2] | undefined,
        mutate?: boolean,
): TObject;

export function setIn<
    TObject extends object,
    T1 extends keyof TObject,
    >(
        target: TObject,
        path: [T1],
        value: TObject[T1] | undefined,
        mutate?: boolean,
): TObject;

export function setIn<
    TObject extends object,
    >(
        target: TObject,
        path: [],
        value: TObject,
        mutate?: boolean,
): TObject;

//#endregion

export function setIn<TObject extends object>(
    obj: TObject,
    path: PropertyKey[],
    value: any,
    mutate = false,
): TObject {
    return transform(
        obj,
        set => set(path as [], value),
        mutate,
    );
}
