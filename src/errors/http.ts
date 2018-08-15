export class UnexpectedResponseStatusError extends Error {
    constructor(
        public expected: number,
        public actual: number,
    ) {
        super(`Unexpected response status, expected: ${expected}, actual: ${actual}.`);
    }
}
