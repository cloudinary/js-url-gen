interface IErrorObject{
  error: Error;
}

/**
 * Validates obj is an instance of IErrorObject
 * @param obj
 */
function isErrorObject(obj: unknown): obj is IErrorObject {
  const errorObj = obj as IErrorObject;
  return ('error' in errorObj) && !!errorObj.error;
}

export {IErrorObject, isErrorObject};