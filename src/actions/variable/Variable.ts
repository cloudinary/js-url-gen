/**
 * Defines an new user variable.
 * @memberOf Actions
 * @namespace Variable
 */

import VariableAction from "./VariableAction";


/**
 * @description Defines an new user variable.
 * @memberOf Actions.Variable
 * @param {string} key
 * @param {number | string} value
 */
function set(key: string, value: number | string): VariableAction {
  return new VariableAction(key, value);
}

export {set};
export default {set};
