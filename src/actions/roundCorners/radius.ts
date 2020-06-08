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
 * @param {number} num;
 * @return {Radius}
 */
function radius(num:number ) {
  return new Radius(num);
}

export default radius;
