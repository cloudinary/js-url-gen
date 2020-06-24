import Action from "../Action";
import {IAction} from "../../interfaces/IAction";

/**
 * @implements IAction
 */
class Sepia extends Action implements IAction {
  constructor() {
    super();
  }

  /**
   * @return {string}
   */
  toString(): string {
    return `e_sepia`;
  }
}

/**
 * @return {Sepia}
 */
function sepia():Sepia {
  return new Sepia();
}

export default sepia;
