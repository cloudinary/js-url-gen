import {IActionModel} from "./internal/models/IActionModel.js";
import {Action} from "./internal/Action.js";
import {ScaleAction} from "./actions/resize/ScaleAction.js";
import {Transformation} from "./transformation/Transformation.js";
import {IErrorObject} from "./internal/models/IErrorObject.js";

const ActionModelMap: Record<string, unknown> = {
  scale: ScaleAction
};

/**
 * Validates that given obj is an instance of IErrorObject
 * @param obj
 */
function isErrorObject(obj: unknown): obj is IErrorObject{
  const errorObj = obj as IErrorObject;
  return ('error' in errorObj) && !!errorObj.error;
}

/**
 * Return array of action instances represented by given action models.
 * @param actionModels
 */
function fromJson(actionModels: IActionModel[]): Transformation | IErrorObject {
  const actions: Action[] = [];

  // Fill actions array, if encounters an error will fail early and result an IErrorObject
  for (const actionModel of actionModels){
    const actionClass = (ActionModelMap[actionModel.actionType] || Action) as typeof Action;
    const action = actionClass.fromJson(actionModel);

    if (isErrorObject(action)){
      return action; // IErrorObject
    }

    actions.push(action);
  }

  const result = new Transformation();
  actions.forEach((action)=>result.addAction(action));
  return result;
}

export {fromJson};