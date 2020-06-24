import Action from "../Action";
import {IAction} from "../../interfaces/IAction";

/**
 * @implements IAction
 */
class Eco extends Action implements IAction {
  constructor() {
    super();
  }

  /**
   * @return {string}
   */
  toString(): string {
    return `q_auto:eco`;
  }
}

/**
 * @return {Eco}
 */
function eco():Eco {
  return new Eco();
}

export default eco;
