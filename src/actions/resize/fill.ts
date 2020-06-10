import '../../interfaces/IAction';
import Action from "../Action";
import {IAction} from "../../interfaces/IAction";

/**
 * @implements IAction
 */
class Fill extends Action implements IAction {
  private fillWidth: number;
  private fillHeight: number;
  /**
   * @param {number} fillWidth
   * @param {number} fillHeight
   */
  constructor(fillWidth: number, fillHeight: number) {
    super();
    this.fillWidth = fillWidth;
    this.fillHeight = fillHeight;
  }

  /**
   * @return {string}
   */
  toString(): string {
    return `c_fill,w_${this.fillWidth},h_${this.fillHeight}`;
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
