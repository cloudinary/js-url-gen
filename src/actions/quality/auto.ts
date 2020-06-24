import Action from "../Action";
import {IAction} from "../../interfaces/IAction";

/**
 * @implements IAction
 */
class Auto extends Action implements IAction {
  constructor() {
    super();
  }

  /**
   * @return {string}
   */
  toString(): string {
    return `q_auto`;
  }
}

/**
 * @return {Auto}
 */
function auto():Auto {
  return new Auto();
}

export default auto;
