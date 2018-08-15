import * as errors from "../errors";
import * as models from "../models";

/**
 * Select a list of templates.
 *
 * @param object $templateState
 *
 * @return array
 */
export function selectTemplateList(
    $templateState: models.TemplateQueryState,
) {
    throw new errors.NotImplemented();

    //     $templateState = (object) $templateState;

    //     $templateList = [];
    //     foreach ($templateState->template as $templateKey => $templateItem) {
    //         $templateList[$templateKey] = $templateItem;
    //     }

    //     return $templateList;
}

/**
 * Get details about a single template from a template-state as returned by
 * the gameye api.
 *
 * @param object $templateState
 * @param string $templateKey
 *
 * @return object
 */
export function selectTemplateItem(
    $templateState: models.TemplateQueryState,
    $templateKey: string,
) {
    throw new errors.NotImplemented();

    //     $templateState = (object) $templateState;
    //     $templateKey = (string) $templateKey;

    //     $templateItem = $templateState->template->$templateKey;

    //     return $templateItem;
}
