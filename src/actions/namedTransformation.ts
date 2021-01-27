import {NamedTransformationAction} from "./namedTransformation/NamedTransformationAction";

/**
 * Applies a pre-defined named transformation of the given name.
 * @memberOf Actions
 * @namespace NamedTransformation
 */

/**
 * @summary action
 * @description Applies a pre-defined named transformation of the given name.
 * @param {string} name Transformation name
 * @memberOf Actions.NamedTransformation
 * @return {NamedTransformationAction}
 */
function name(name:string): NamedTransformationAction {
  return new NamedTransformationAction(name);
}


const NamedTransformation = {name};

export {NamedTransformation, name};
