import SmartObject from "./GetSmartObjectAction";

/**
 * @description  Creates an instance using the name.
 * @memberOf Actions.SmartObject
 * @return {SmartObject}
 */
function byFileName(filename: string):SmartObject {
  return new SmartObject(`name:${filename}`);
}

export default byFileName;
