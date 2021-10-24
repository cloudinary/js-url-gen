import {ResizeScaleAction} from "../actions/resize/ResizeScaleAction.js";
import {ResizeFitAction} from "../actions/resize/ResizeFitAction.js";
import {ResizeLimitFitAction} from "../actions/resize/ResizeLimitFitAction.js";
import {Transformation} from "../transformation/Transformation.js";
import {IActionModel} from "./models/IActionModel.js";
import {Action} from "./Action.js";
import {IErrorObject} from "./models/IErrorObject.js";
import {createUnsupportedError} from "./utils/unsupportedError.js";
import {IHasFromJson} from "./models/IHasFromJson.js";
import {ResizeMinimumFitAction} from "../actions/resize/ResizeMinimumFitAction.js";

const ActionModelMap: Record<string, IHasFromJson> = {
  scale: ResizeScaleAction,
  fit: ResizeFitAction,
  limitFit: ResizeLimitFitAction,
  minimumFit: ResizeMinimumFitAction
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
      throw createUnsupportedError(`unsupported action ${actionModel.actionType}`);
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
    const transformation = new Transformation();
    actions(actionModels).forEach((action)=>transformation.addAction(action));
    return transformation;
  } catch (error) {
    return {error};
  }
}

export {fromJson};