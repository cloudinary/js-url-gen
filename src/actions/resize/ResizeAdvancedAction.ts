import ResizeSimpleAction from "./ResizeSimpleAction";
import {IGravity} from "../../values/gravity/GravityQualifier";

/**
 * @description Defines an advanced resize.
 * @class ResizeAdvancedAction
 * @augments ResizeSimpleAction
 */
class ResizeAdvancedAction extends ResizeSimpleAction {
  /**
   * @description Which part of the original image to include.
   * @param {Values.Gravity} gravity
   */
  gravity(gravity:IGravity): this {
    return this.addQualifier(gravity);
  }
}


export default ResizeAdvancedAction;
