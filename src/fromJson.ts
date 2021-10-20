import {IActionModel} from "./internal/models/IActionModel.js";
import {Action} from "./internal/Action.js";
import {ScaleAction} from "./actions/resize/ScaleAction.js";
import {Transformation} from "./transformation/Transformation.js";
import {IErrorObject} from "./internal/models/IErrorObject.js";
import {unsupportedError} from "./internal/utils/unsupportedError.js";
import {IFromJson} from "./internal/models/IFromJson.js";

const ActionModelMap: Record<string, IFromJson> = {
  scale: ScaleAction
};

/**
 * Convert actions models to actions.
 * @throws UnsupportedError if encounters an unsupported action.
 * @param actionModels
 */
function actions(actionModels: IActionModel[]): Action[] {
  return actionModels.map((actionModel) => {
    const actionClass = (ActionModelMap[actionModel.actionType]);
    if (!actionClass) {
      throw unsupportedError(`unsupported action ${actionModel.actionType}`);
    }

    return actionClass.fromJson(actionModel);
  });
}

/**
 * Return array of action instances represented by given action models.
 * @param actionModels
 */
function fromJson(actionModels: IActionModel[]): Transformation | IErrorObject {
  try {
    // Create a new Transformation and add all actions to it
    return actions(actionModels)
      .reduce((transformation, action) =>
        transformation.addAction(action), new Transformation());
  } catch (error) {
    return {error};
  }
}

export {fromJson};