import Action from "../Action";
import Param from "../../parameters/Param";
import {IVariableAction} from "./IVariableAction";
import {isString} from "../../utils/dataStructureUtils";

// TODO: when spec for $award_ctx:!First! is ready, implement it
// TODO: when spec for $award_ref:!First! is ready, implement it
// TODO: when spec for to_i & to_f is ready, implement it

class Variable extends Action implements IVariableAction {
  constructor(key: string, value: number | string) {
    super();
    const paramKey = `$${key}`;
    const paramValue = isString(value) ? `!${value}!` : value;
    this.addParam(new Param(paramKey, paramValue));
  }
}

/**
 * Build new Variable
 * @param {string} key
 * @param {number | string} value
 */
function variable(key: string, value: number | string) {
  return new Variable(key, value);
}

export {variable};
export default Variable;
