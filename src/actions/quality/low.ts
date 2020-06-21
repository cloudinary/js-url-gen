import Action from "../Action";
import {IAction} from "../../interfaces/IAction";

/**
 * @implements IAction
 */
class Low extends Action implements IAction {
  constructor() {
    super();
  }

  /**
   * @return {string}
   */
  toString(): string {
    return `q_auto:low`;
  }
}

/**
 * @return {Low}
 */
function low():Low {
  return new Low();
}

export default low;
