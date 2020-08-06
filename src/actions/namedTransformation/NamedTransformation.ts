/**
 * Applies a pre-defined named transformation of the given name.
 * @memberOf Actions
 * @namespace NamedTransformation
 */

import Action from "../Action";
import Param from "../../parameters/Param";
import {INamedTransformationAction} from "./INamedTransformationAction";

class NamedTransformationAction extends Action implements INamedTransformationAction{
  constructor(name:string) {
    super();
    this.addParam(new Param('t', name));
  }
}

/**
 * @description Applies a pre-defined named transformation of the given name.
 * @param {string} name Transformation name
 * @memberOf Actions.NamedTransformation
 */
function name(name:string): NamedTransformationAction {
  return new NamedTransformationAction(name);
}


export {name};
export default {name};
