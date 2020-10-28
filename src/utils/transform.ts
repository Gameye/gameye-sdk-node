import { getIn } from "./deep";

interface TransformGet<TObject> {

    //#region overloads

    <
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
        path: [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10],
        defaultValue?: TDefault,
    ): TObject[T1][T2][T3][T4][T5][T6][T7][T8][T9][T10] | TDefault;

    <
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
        path: [T1, T2, T3, T4, T5, T6, T7, T8, T9],
        defaultValue?: TDefault,
    ): TObject[T1][T2][T3][T4][T5][T6][T7][T8][T9] | TDefault;

    <
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
        path: [T1, T2, T3, T4, T5, T6, T7, T8],
        defaultValue?: TDefault,
    ): TObject[T1][T2][T3][T4][T5][T6][T7][T8] | TDefault;

    <
        T1 extends keyof TObject,
        T2 extends keyof TObject[T1],
        T3 extends keyof TObject[T1][T2],
        T4 extends keyof TObject[T1][T2][T3],
        T5 extends keyof TObject[T1][T2][T3][T4],
        T6 extends keyof TObject[T1][T2][T3][T4][T5],
        T7 extends keyof TObject[T1][T2][T3][T4][T5][T6],
        TDefault = undefined,
        >(
        path: [T1, T2, T3, T4, T5, T6, T7],
        defaultValue?: TDefault,
    ): TObject[T1][T2][T3][T4][T5][T6][T7] | TDefault;

    <
        T1 extends keyof TObject,
        T2 extends keyof TObject[T1],
        T3 extends keyof TObject[T1][T2],
        T4 extends keyof TObject[T1][T2][T3],
        T5 extends keyof TObject[T1][T2][T3][T4],
        T6 extends keyof TObject[T1][T2][T3][T4][T5],
        TDefault = undefined,
        >(
        path: [T1, T2, T3, T4, T5, T6],
        defaultValue?: TDefault,
    ): TObject[T1][T2][T3][T4][T5][T6] | TDefault;

    <
        T1 extends keyof TObject,
        T2 extends keyof TObject[T1],
        T3 extends keyof TObject[T1][T2],
        T4 extends keyof TObject[T1][T2][T3],
        T5 extends keyof TObject[T1][T2][T3][T4],
        TDefault = undefined,
        >(
        path: [T1, T2, T3, T4, T5],
        defaultValue?: TDefault,
    ): TObject[T1][T2][T3][T4][T5] | TDefault;

    <
        T1 extends keyof TObject,
        T2 extends keyof TObject[T1],
        T3 extends keyof TObject[T1][T2],
        T4 extends keyof TObject[T1][T2][T3],
        TDefault = undefined,
        >(
        path: [T1, T2, T3, T4],
        defaultValue?: TDefault,
    ): TObject[T1][T2][T3][T4] | TDefault;

    <
        T1 extends keyof TObject,
        T2 extends keyof TObject[T1],
        T3 extends keyof TObject[T1][T2],
        TDefault = undefined,
        >(
        path: [T1, T2, T3],
        defaultValue?: TDefault,
    ): TObject[T1][T2][T3] | TDefault;

    <
        T1 extends keyof TObject,
        T2 extends keyof TObject[T1],
        TDefault = undefined,
        >(
        path: [T1, T2],
        defaultValue?: TDefault,
    ): TObject[T1][T2] | TDefault;

    <
        T1 extends keyof TObject,
        TDefault = undefined,
        >(
        path: [T1],
        defaultValue?: TDefault,
    ): TObject[T1] | TDefault;

    <
        TDefault = undefined,
        >(
        path: [],
        defaultValue?: TDefault,
    ): TObject | TDefault;

    //#endregion

    // <
    //     TDefault = undefined,
    //     >(
    //     path: PropertyKey[],
    //     defaultValue?: TDefault,
    // ): unknown | TDefault;
}

interface TransformSet<TObject> {

    //#region overloads

    <
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
        path: [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10],
        value: TObject[T1][T2][T3][T4][T5][T6][T7][T8][T9][T10] | undefined,
    ): void;

    <
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
        path: [T1, T2, T3, T4, T5, T6, T7, T8, T9],
        value: TObject[T1][T2][T3][T4][T5][T6][T7][T8][T9] | undefined,
    ): void;

    <
        T1 extends keyof TObject,
        T2 extends keyof TObject[T1],
        T3 extends keyof TObject[T1][T2],
        T4 extends keyof TObject[T1][T2][T3],
        T5 extends keyof TObject[T1][T2][T3][T4],
        T6 extends keyof TObject[T1][T2][T3][T4][T5],
        T7 extends keyof TObject[T1][T2][T3][T4][T5][T6],
        T8 extends keyof TObject[T1][T2][T3][T4][T5][T6][T7],
        >(
        path: [T1, T2, T3, T4, T5, T6, T7, T8],
        value: TObject[T1][T2][T3][T4][T5][T6][T7][T8] | undefined,
    ): void;

    <
        T1 extends keyof TObject,
        T2 extends keyof TObject[T1],
        T3 extends keyof TObject[T1][T2],
        T4 extends keyof TObject[T1][T2][T3],
        T5 extends keyof TObject[T1][T2][T3][T4],
        T6 extends keyof TObject[T1][T2][T3][T4][T5],
        T7 extends keyof TObject[T1][T2][T3][T4][T5][T6],
        >(
        path: [T1, T2, T3, T4, T5, T6, T7],
        value: TObject[T1][T2][T3][T4][T5][T6][T7] | undefined,
    ): void;

    <
        T1 extends keyof TObject,
        T2 extends keyof TObject[T1],
        T3 extends keyof TObject[T1][T2],
        T4 extends keyof TObject[T1][T2][T3],
        T5 extends keyof TObject[T1][T2][T3][T4],
        T6 extends keyof TObject[T1][T2][T3][T4][T5],
        >(
        path: [T1, T2, T3, T4, T5, T6],
        value: TObject[T1][T2][T3][T4][T5][T6] | undefined,
    ): void;

    <
        T1 extends keyof TObject,
        T2 extends keyof TObject[T1],
        T3 extends keyof TObject[T1][T2],
        T4 extends keyof TObject[T1][T2][T3],
        T5 extends keyof TObject[T1][T2][T3][T4],
        >(
        path: [T1, T2, T3, T4, T5],
        value: TObject[T1][T2][T3][T4][T5] | undefined,
    ): void;

    <
        T1 extends keyof TObject,
        T2 extends keyof TObject[T1],
        T3 extends keyof TObject[T1][T2],
        T4 extends keyof TObject[T1][T2][T3],
        >(
        path: [T1, T2, T3, T4],
        value: TObject[T1][T2][T3][T4] | undefined,
    ): void;

    <
        T1 extends keyof TObject,
        T2 extends keyof TObject[T1],
        T3 extends keyof TObject[T1][T2],
        >(
        path: [T1, T2, T3],
        value: TObject[T1][T2][T3] | undefined,
    ): void;

    <
        T1 extends keyof TObject,
        T2 extends keyof TObject[T1],
        >(
        path: [T1, T2],
        value: TObject[T1][T2] | undefined,
    ): void;

    <
        T1 extends keyof TObject,
        >(
        path: [T1],
        value: TObject[T1] | undefined,
    ): void;

    (
        path: [],
        value: TObject,
    ): void;

    //#endregion

    // (
    //     path: PropertyKey[],
    //     value: unknown,
    // ): void;
}

export function transform<TObject extends object>(
    source: TObject,
    job: (
        set: TransformSet<TObject>,
        get: TransformGet<TObject>,
    ) => void,
    mutate = false,
): TObject {
    let target: any = source;

    const get = <TDefault = undefined>(
        path: PropertyKey[],
        defaultValue?: TDefault,
    ): unknown | TDefault => {
        return getIn(
            target,
            path as [],
            defaultValue,
        );
    };

    const set = (
        path: PropertyKey[],
        value: unknown,
    ): void => {
        if (path.length === 0) {
            target = value;
            return;
        }

        if (!mutate && target === source) target = { ... (source as object) };
        let targetParent: any = target;
        let sourceParent: any = source;
        let keyIndex = 0;
        const parentPathLength = path.length - 1;
        while (keyIndex < parentPathLength) {
            if (typeof targetParent !== "object") throw new Error(`${targetParent} is not an object`);

            const key = path[keyIndex];
            if (
                key in targetParent &&
                typeof targetParent[key] === "object" &&
                targetParent[key] !== null
            ) {
                if (
                    !mutate &&
                    sourceParent !== undefined &&
                    sourceParent[key] === targetParent[key]
                ) targetParent[key] = { ...targetParent[key] };
            }
            else {
                targetParent[key] = {};
            }
            targetParent = targetParent[key];
            sourceParent = sourceParent !== undefined && key in sourceParent ?
                sourceParent[key] :
                undefined;
            keyIndex++;
        }
        {
            const key = path[keyIndex];
            if (value === undefined) delete targetParent[key];
            else targetParent[key] = value;
        }
    };

    job(set, get);

    return target;
}
