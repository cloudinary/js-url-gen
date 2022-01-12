import {IActionModel} from "./IActionModel.js";
import {IErrorObject} from "./IErrorObject.js";
import {createUnsupportedError} from "../utils/unsupportedError.js";

/**
 * Returns the action's model
 */
export function actionToJson(): IActionModel | IErrorObject {
  if (this._actionModel && this._actionModel.actionType) {
    return this._actionModel;
  }

  return {error: createUnsupportedError(`unsupported action ${this.constructor.name}`)};
}
