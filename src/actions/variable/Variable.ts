/**
 * Defines an new user variable.
 * @memberOf Actions
 * @namespace Variable
 */

import Action from "../Action";
import Param from "../../parameters/Param";
import {IVariableAction} from "./IVariableAction";
import {isString} from "../../utils/dataStructureUtils";

// TODO: when spec for $award_ctx:!First! is ready, implement it
// TODO: when spec for $award_ref:!First! is ready, implement it
// TODO: when spec for to_i & to_f is ready, implement it
// TODO: when spec for list_!b:b:b! is ready, implement it

class VariableAction extends Action implements IVariableAction {
  constructor(key: string, value: number | string) {
    super();
    const paramKey = `$${key}`;
    const paramValue = isString(value) ? `!${value}!` : value;
    this.addParam(new Param(paramKey, paramValue));
  }
}

/**
 * @description Defines an new user variable.
 * @memberOf Actions.Variable
 * @param {string} key
 * @param {number | string} value
 */
function variable(key: string, value: number | string): VariableAction {
  return new VariableAction(key, value);
}

export {variable};
export default {variable};
