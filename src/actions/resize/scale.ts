import '../../interfaces/IAction';
import Action from "../Action";
import {IAction} from "../../interfaces/IAction";

/**
 * @implements IAction
 */
class Scale extends Action implements IAction {
  /**
   * @param {number} scaleWidth
   * @param {number} scaleHeight
   */
  constructor(scaleWidth: number, scaleHeight:number) {
    super();
  }
}

/**
 * @param {number} scaleWidth
 * @param {number} scaleHeight
 * @return {Scale}
 */
function scale(scaleWidth:number, scaleHeight:number): Scale {
  return new Scale(scaleWidth, scaleHeight);
}

export default scale;
