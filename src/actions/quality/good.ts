import Action from "../Action";
import {IAction} from "../../interfaces/IAction";

/**
 * @implements IAction
 */
class Good extends Action implements IAction {
  constructor() {
    super();
  }

  /**
   * @return {string}
   */
  toString(): string {
    return `q_auto:good`;
  }
}

/**
 * @return {Good}
 */
function good():Good {
  return new Good();
}

export default good;
