// tslint:disable:max-classes-per-file

export class UnexpectedResponseStatusError extends Error {
    constructor(
        public expected: number,
        public actual: number,
    ) {
        super(`Unexpected response status, expected: ${expected}, actual: ${actual}.`);
    }
}

export class ExpectedBodyError extends Error {
    constructor() {
        super(`Expected a body`);
    }
}
