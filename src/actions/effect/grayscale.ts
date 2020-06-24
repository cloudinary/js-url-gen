import Action from "../Action";
import {IAction} from "../../interfaces/IAction";

/**
 * @implements IAction
 */
class Grayscale extends Action implements IAction {
  constructor() {
    super();
  }

  /**
   * @return {string}
   */
  toString(): string {
    return `e_grayscale`;
  }
}

/**
 * @return {Grayscale}
 */
function grayscale():Grayscale {
  return new Grayscale();
}

export default grayscale;
