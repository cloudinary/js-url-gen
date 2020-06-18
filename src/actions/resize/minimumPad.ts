import Action from "../Action";
import {IAction} from "../../interfaces/IAction";

/**
 * @implements IAction
 */
class MinimumPad extends Action implements IAction {
  /**
   *
   * @param {number} padWidth
   * @param {number} padHeight
   */
  constructor(padWidth: number, padHeight:number) {
    super();
  }
}

/**
 * @param {number} padWidth
 * @param {number} padHeight
 * @return {MinimumPad}
 */
function minimumPad(padWidth:number, padHeight:number) {
  return new MinimumPad(padWidth, padHeight);
}

export default minimumPad;
