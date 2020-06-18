import Action from "../Action";
import {IAction} from "../../interfaces/IAction";

/**
 * @implements IAction
 */
class Fill extends Action implements IAction {
  /**
   * @param {number} fillWidth
   * @param {number} fillHeight
   */
  constructor(fillWidth: number, fillHeight: number) {
    super();
  }
}

/**
 * @param {number} fillWidth
 * @param {number} fillHeight
 * @return {Fill}
 */
function fill(fillWidth: number, fillHeight: number) {
  return new Fill(fillWidth, fillHeight);
}

export default fill;
