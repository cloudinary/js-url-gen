import Param from "../../../parameters/Param";
import ResizeSimpleAction from "./ResizeSimpleAction";
import {toFloatAsString} from "../../../utils/toFloatAsString";
import {GravityParam} from "../../../params/gravity/Gravity";

class ResizeAdvancedAction extends ResizeSimpleAction {
  aspectRatio(ratio:number|string): this {
    // toFloatAsString is used to ensure 1 turns into 1.0
    return this.addParam(new Param('ar', toFloatAsString(ratio)));
  }

  gravity(gravity:GravityParam): this {
    return this.addParam(gravity);
  }
}


export default ResizeAdvancedAction;
