import Qualifier from "../../../qualifier/Qualifier";
import ResizeSimpleAction from "./ResizeSimpleAction";
import {toFloatAsString} from "../../../utils/toFloatAsString";
import {GravityParam} from "../../../values/gravity/Gravity";

class ResizeAdvancedAction extends ResizeSimpleAction {
  aspectRatio(ratio:number|string): this {
    // toFloatAsString is used to ensure 1 turns into 1.0
    return this.addQualifier(new Qualifier('ar', toFloatAsString(ratio)));
  }

  gravity(gravity:GravityParam): this {
    return this.addQualifier(gravity);
  }
}


export default ResizeAdvancedAction;
