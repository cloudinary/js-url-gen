import '../../interfaces/IAction';
import Action from "../Action";
import {IAction} from "../../interfaces/IAction";

/**
 * @implements IAction
 */
class Radius extends Action implements IAction {
  /**
   * @param {number} num
   */
  constructor(num: number) {
    super();
  }
}

/**
 * @memberOf Actions.RoundCorners
 * @description Rounds the specified corners of an image by specifying 1-4 pixel values as follows:
 * @param {number} num;
 * @return {Radius}
 */
function radius(num:number ):Radius {
  return new Radius(num);
}

export default radius;
