import {IActionModel} from "../models/IActionModel.js";

/**
 * Validates obj is an instance of IActionModel
 * @param obj
 */
export function isIActionModel(obj: unknown): obj is IActionModel{
  const actionModel = obj as IActionModel;
  return ('actionType' in actionModel);
}
