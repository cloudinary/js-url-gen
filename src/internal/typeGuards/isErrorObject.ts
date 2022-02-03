import {IErrorObject} from "../models/IErrorObject.js";

/**
 * Validates obj is an instance of IErrorObject
 * @param obj
 */
export function isErrorObject(obj: unknown): obj is IErrorObject {
  const errorObj = obj as IErrorObject;
  return ('error' in errorObj) && !!errorObj.error;
}
