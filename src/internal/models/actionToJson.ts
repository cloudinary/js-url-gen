import {IActionModel} from "./IActionModel.js";
import {IErrorObject} from "./IErrorObject.js";
import {createUnsupportedError} from "../utils/unsupportedError.js";

export type IActionToJson = IActionModel | IErrorObject;
/**
 * Returns the action's model
 */
export function actionToJson(): IActionToJson {
  const actionModelIsNotEmpty = this._actionModel && Object.keys(this._actionModel).length;

  if (actionModelIsNotEmpty) {
    return this._actionModel;
  }

  return {error: createUnsupportedError(`unsupported action ${this.constructor.name}`)};
}
