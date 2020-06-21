import Action from "../Action";
import {IAction} from "../../interfaces/IAction";

/**
 * @implements IAction
 */
class Best extends Action implements IAction {
  constructor() {
    super();
  }

  /**
   * @return {string}
   */
  toString(): string {
    return `q_auto:best`;
  }
}

/**
 * @return {Best}
 */
function best():Best {
  return new Best();
}

export default best;
