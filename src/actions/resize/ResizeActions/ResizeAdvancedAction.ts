import ResizeSimpleAction from "./ResizeSimpleAction";
import {GravityParam} from "../../../values/gravity/Gravity";

/**
 * @class ResizeAdvancedAction
 * @augments ResizeSimpleAction
 * @@doc
 * @description A class used to define an advanced resize.
 */
class ResizeAdvancedAction extends ResizeSimpleAction {
  gravity(gravity:GravityParam): this {
    return this.addQualifier(gravity);
  }
}


export default ResizeAdvancedAction;
