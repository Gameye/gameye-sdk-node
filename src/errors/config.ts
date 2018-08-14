export class MissingConfigurationField extends Error {
    constructor(public fieldName: string) {
        super(`missing configuration field '${fieldName}'`);
    }
}
