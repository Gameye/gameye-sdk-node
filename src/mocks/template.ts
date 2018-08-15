import * as models from "../models";

export const templateStateMock: models.TemplateQueryState = {
    template: {
        t1: {
            templateKey: "t1",
            arg: [{
                name: "tickRate",
                type: "number",
                defaultValue: 64,
                option: [64, 128],
            }],
        },
        t2: {
            templateKey: "t2",
            arg: [{
                name: "steamToken",
                type: "string",
                defaultValue: "",
            }, {
                name: "hostname",
                type: "string",
                defaultValue: "gameye.com Match Server",
            }],
        },
    },
};
