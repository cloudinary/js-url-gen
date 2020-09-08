import SmartObject from "./getSmartObjectAction";

/**
 * @description  Creates an instance using the name.
 * @memberOf Actions.SmartObject
 */
function byFileName(filename: string):SmartObject {
  return new SmartObject(`name:${filename}`);
}

export default byFileName;
