import SetAction from "./variable/SetAction";
import SetAssetReferenceAction from "./variable/SetAssetReferenceAction";
import SetFromContextAction from "./variable/SetFromContextAction";
import SetFromMetadataAction from "./variable/SetFromMetadataAction";
import {ExpressionQualifier} from "../qualifiers/expression/ExpressionQualifier";

/**
 * Defines a new user variable with the given value.
 * @memberOf Actions
 * @namespace Variable
 * @example
 * import {Cloudinary} from "@cloudinary/base/instance/Cloudinary";
 * import {
 *  set,
 *  setAssetReference,
 *  setFromContext,
 *  setFromMetadata
 * } from "@cloudinary/base/actions/variable";
 * import {scale} from "@cloudinary/base/actions/resize";
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 *
 * const image1 = yourCldInstance.image('woman');
 * image1.addVariable(set('foo', 100)).resize(scale().width('$foo'));
 *
 * const image2 = yourCldInstance.image('woman');
 * image2.addVariable(setAssetReference('foo', 'val'));
 *
 * const image3 = yourCldInstance.image('woman');
 * image3.addVariable(setFromContext('foo', 'val'));
 *
 * const image4 = yourCldInstance.image('woman');
 * image4.addVariable(setFromMetadata('foo', 'val'));
 */


/**
 * @summary action
 * @description Sets a new user variable with the given value.
 * @memberOf Actions.Variable
 * @param name Variable name
 * @param {number | string | number[] | string[]} value Variable value
 * @return {Actions.Variable.SetAction}
 */
function set(name: string, value: number | string | number[] | string[] | ExpressionQualifier): SetAction {
  return new SetAction(name, value);
}

/**
 * @summary action
 * @description Allows adding a variable by sending a key and value which is a reference to an asset.
 * @memberOf Actions.Variable
 * @param {string} name
 * @param {string} value
 * @return {Actions.Variable.SetAssetReferenceAction}
 */
function setAssetReference(name: string, value: string): SetAssetReferenceAction {
  return new SetAssetReferenceAction(name, value);
}

/**
 * @summary action
 * @description Allows adding a variable by sending a key and value which is a key to a value that assumed to be on
 * the asset’s context.
 * @memberOf Actions.Variable
 * @param {string} name
 * @param {string} value
 * @return {Actions.Variable.SetFromContextAction}
 */
function setFromContext(name: string, value: string): SetFromContextAction {
  return new SetFromContextAction(name, value);
}

/**
 * @summary action
 * @description Allows adding a variable by sending a name and value which is a key to a value that assumed to be on
 * the predefined account’s metadata fields.
 * @memberOf Actions.Variable
 * @param {string} name
 * @param {string} value
 * @return {Actions.Variable.SetFromMetadataAction}
 */
function setFromMetadata(name: string, value: string): SetFromMetadataAction {
  return new SetFromMetadataAction(name, value);
}

const Variable = {
  set,
  setAssetReference,
  setFromContext,
  setFromMetadata
};
export {
  set,
  setAssetReference,
  setFromContext,
  setFromMetadata,
  Variable
};
