export function isEmpty(value: any): boolean {
    if (value === undefined) return true;
    if (value === null) return true;
    switch (typeof value) {
        case "string":
            if (value === "") return true;
            break;
        case "object":
            return Object.values(value).every(isEmpty);
    }
    return false;
}
