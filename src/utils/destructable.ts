export type Destructor = (err?: any) => void | PromiseLike<void>;

export interface Destructable {
    destroy: Destructor;
}

export type Usable<TDestructable extends Destructable> = TDestructable | PromiseLike<TDestructable>;

export async function use<TResult, TDestructable extends Destructable>(
    usable: Usable<TDestructable>,
    job: (destructable: TDestructable) => TResult,
): Promise<TResult> {
    const destructable = await usable;
    try {
        const result = await job(destructable);
        return result;
    }
    finally {
        await destructable.destroy();
    }
}
