import {IActionModel} from "../internal/models/IActionModel.js";
import {Action} from "../internal/Action.js";
import {ScaleAction} from "../actions/resize/ScaleAction.js";
import {IAction} from "../internal/models/IAction.js";
import {IFromJson} from "../internal/models/IFromJson.js";

/**
 * Returns action for given model
 * @param actionModel
 */
function getActionByModel(actionModel: IActionModel): IFromJson{
  switch (actionModel.actionType) {
    case 'scale': return ScaleAction;
    default: return Action;
  }
}

/**
 * Return the
 * @param actionModel
 */
function actionFromJson(actionModel: IActionModel): IAction {
  return getActionByModel(actionModel).fromJson(actionModel);
}

/**
 *
 * @param actionModels
 */
function fromJson(actionModels: IActionModel[]): IAction[]{
  return actionModels.map(actionFromJson);
}

export {fromJson};