import SetAction from "./SetAction";
import SetReferenceAction from "./SetReferenceAction";
import SetFromContextAction from "./SetFromContextAction";
import SetFromMetadataAction from "./SetFromMetadataAction";

/**
 * Defines a new user variable with the given value.
 * @memberOf Actions
 * @namespace Variable
 */

/**
 * @description Sets a new user variable with the given value.
 * @memberOf Actions.Variable
 * @param name Variable name
 * @param {number | string | number[] | string[]} value Variable value
 * @return {SetAction}
 */
function set(name: string, value: number | string | number[] | string[]): SetAction {
  return new SetAction(name, value);
}

/**
 * @description Allows adding a variable by sending a key and value which is a reference to a file.
 * @memberOf Actions.Variable
 * @param {string} name
 * @param {string} value
 * @return {SetReferenceAction}
 */
function setReference(name: string, value: string): SetReferenceAction{
  return new SetReferenceAction(name, value);
}

/**
 * @description Allows adding a variable by sending a key and value which is a key to a value that assumed to be on
 * the asset’s context.
 * @memberOf Actions.Variable
 * @param {string} name
 * @param {string} value
 * @return {SetFromContextAction}
 */
function setFromContext(name: string, value: string): SetFromContextAction {
  return new SetFromContextAction(name, value);
}

/**
 * @description Allows adding a variable by sending a name and value which is a key to a value that assumed to be on
 * the predefined account’s metadata fields.
 * @memberOf Actions.Variable
 * @param {string} name
 * @param {string} value
 * @return {SetFromMetadataAction}
 */
function setFromMetadata(name: string, value: string): SetFromMetadataAction {
  return new SetFromMetadataAction(name, value);
}

export {set, setReference, setFromContext, setFromMetadata};
export default {set, setReference, setFromContext, setFromMetadata};
