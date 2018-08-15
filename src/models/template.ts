export interface TemplateQueryState {
    template: TemplateQueryArgIndex;
}

export interface TemplateQueryArgIndex {
    [templateKey: string]: TemplateQueryArgItem | null;
}

export interface TemplateQueryArgItem {
    templateKey: string;
    arg: ArgConfig;
}

export type ArgConfig = ArgConfigItem[];

export type ArgConfigItem =
    NumberArgConfigItem |
    StringArgConfigItem;

export interface NumberArgConfigItem extends ArgConfigItemProto<"number"> {
    defaultValue: number;
    minimumValue?: number;
    minimumExclusive?: boolean;
    maximumValue?: number;
    maximumExclusive?: boolean;
    option?: number[];
}
export interface StringArgConfigItem extends ArgConfigItemProto<"string"> {
    defaultValue: string;
    validatePattern?: string;
    validateIgnoreCase?: boolean;
    option?: string[];
}

export interface ArgConfigItemProto<T extends string> {
    name: string;
    type: T;
}
