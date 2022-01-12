import {IErrorObject} from "./IErrorObject.js";
import {createUnsupportedError} from "../utils/unsupportedError.js";
import {IQualifierModel} from "./IQualifierModel.js";

/**
 * Returns the action's model
 */
export function qualifierToJson(): IQualifierModel | IErrorObject {
  if (this._qualifierModel && this._qualifierModel.qualifierType) {
    return this._qualifierModel;
  }

  return {error: createUnsupportedError(`unsupported qualifier ${this.constructor.name}`)};
}
