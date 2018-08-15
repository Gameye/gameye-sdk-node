import * as models from "../models";

export type TemplateItem = models.TemplateQueryArgItem;

/**
 * Select a list of templates.
 */
export function selectTemplateList(
    templateState: models.TemplateQueryState,
): TemplateItem[] {
    return Object.values(templateState.template).
        filter(Boolean).
        map(i => i as TemplateItem);
}

/**
 * Get details about a single template from a template-state as returned by
 * the gameye api.
 */
export function selectTemplateItem(
    templateState: models.TemplateQueryState,
    templateKey: string,
): TemplateItem | null {
    const templateItem = templateState.template[templateKey];
    if (!templateItem) return null;
    return templateItem;
}
