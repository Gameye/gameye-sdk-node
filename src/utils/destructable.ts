export type Destructor = (err?: any) => void | PromiseLike<void>;

export interface Destructable {
    destroy: Destructor;
}

export type Usable<TDisposable extends Destructable> = TDisposable | PromiseLike<TDisposable>;

export async function use<TResult, TDisposable extends Destructable>(
    usable: Usable<TDisposable>,
    job: (destructable: TDisposable) => TResult,
): Promise<TResult> {
    const disposable = await usable;
    try {
        const result = await job(disposable);
        await disposable.destroy();
        return result;
    }
    catch (err) {
        await disposable.destroy(err);
        throw err;
    }
}
