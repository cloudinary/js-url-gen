import {IActionModel} from "./internal/models/IActionModel.js";
import {Action} from "./internal/Action.js";
import {ScaleAction} from "./actions/resize/ScaleAction.js";
import {IAction} from "./internal/models/IAction.js";
import {IFromJson} from "./internal/models/IFromJson.js";

const ActionModelMap: Record<string, IFromJson> = {
  scale: ScaleAction
};

/**
 * Returns action class for given model
 * @param actionModel
 */
function getActionByModel(actionModel: IActionModel): IFromJson{
  return ActionModelMap[actionModel.actionType] || Action;
}

/**
 * Return the action instance represented by given actionModel
 * @param actionModel
 */
function actionFromJson(actionModel: IActionModel): IActionModel {
  return getActionByModel(actionModel).fromJson(actionModel) as IActionModel;
}

/**
 * Return array of action instances represented by given action models.
 * @param actionModels
 */
function fromJson(actionModels: IActionModel[]): IActionModel[]{
  return actionModels.map(actionFromJson);
}

export {fromJson};