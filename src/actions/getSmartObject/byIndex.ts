import SmartObject from "./getSmartObjectAction";

/**
 * @description  Creates a new instance using the specified index.
 * @memberOf Actions.SmartObject
 */
function byIndex(index: number):SmartObject {
  return new SmartObject(index);
}

export default byIndex;
