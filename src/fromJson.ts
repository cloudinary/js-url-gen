import {IActionModel} from "./internal/models/IActionModel.js";
import {Action} from "./internal/Action.js";
import {ScaleAction} from "./actions/resize/ScaleAction.js";

const ActionModelMap: Record<string, unknown> = {
  scale: ScaleAction
};

/**
 * Return array of action instances represented by given action models.
 * @param actionModels
 */
function fromJson(actionModels: IActionModel[]): Action[]{
  return actionModels.map((actionModel)=>{
    const action = (ActionModelMap[actionModel.actionType] || Action) as typeof Action; // Class of action
    return action.fromJson(actionModel); // Instance of action
  });
}

export {fromJson};