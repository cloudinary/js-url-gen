import {IErrorObject} from "./IErrorObject.js";
import {createUnsupportedError} from "../utils/unsupportedError.js";
import {IQualifierModel} from "./IQualifierModel.js";

export type IQualifierToJson = IQualifierModel | IErrorObject;

/**
 * Returns the action's model
 */
export function qualifierToJson(): IQualifierToJson {
  return this._qualifierModel || {error: createUnsupportedError(`unsupported qualifier ${this.constructor.name}`)};
}
