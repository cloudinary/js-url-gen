import {IActionModel} from "../internal/models/IActionModel.js";
import {Action} from "../internal/Action.js";
import {ScaleAction} from "../actions/resize/ScaleAction.js";
import {IAction} from "../internal/models/IAction.js";
import {IFromJson} from "../internal/models/IFromJson.js";

/**
 * Returns action class for given model
 * @param actionModel
 */
function getActionByModel(actionModel: IActionModel): IFromJson{
  switch (actionModel.actionType) {
    case 'scale': return ScaleAction;
    default: return Action;
  }
}

/**
 * Return the action instance represented by given actionModel
 * @param actionModel
 */
function actionFromJson(actionModel: IActionModel): IAction {
  return getActionByModel(actionModel).fromJson(actionModel);
}

/**
 * Return array of action instances represented by given action models.
 * @param actionModels
 */
function fromJson(actionModels: IActionModel[]): IAction[]{
  return actionModels.map(actionFromJson);
}

export {fromJson};