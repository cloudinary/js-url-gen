import ResizeSimpleAction from "./ResizeSimpleAction";
import {GravityParam} from "../../../../values/gravity/Gravity";

/**
 * @@doc
 * @description A class used to define an advanced resize.
 * @class ResizeAdvancedAction
 * @augments ResizeSimpleAction
 */
class ResizeAdvancedAction extends ResizeSimpleAction {
  /**
   * @description Which part of the original image to include.
   * @param {Values.Gravity} gravity
   */
  gravity(gravity:GravityParam): this {
    return this.addQualifier(gravity);
  }
}


export default ResizeAdvancedAction;
