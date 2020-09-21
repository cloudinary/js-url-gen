import SetAction from "./SetAction";
/**
 * Defines an new user variable.
 * @memberOf Actions
 * @namespace Variable
 */


/**
 * @description Defines an new user variable.
 * @memberOf Actions.Variable
 * @param {string} name
 * @param {number | string} value
 */
function set(name: string, value: number | string): SetAction {
  return new SetAction(name, value);
}

export {set};
export default {set};
