import Qualifier from "../../../qualifier/Qualifier";
import ResizeSimpleAction from "./ResizeSimpleAction";
import {toFloatAsString} from "../../../utils/toFloatAsString";
import {GravityParam} from "../../../values/gravity/Gravity";

class ResizeAdvancedAction extends ResizeSimpleAction {
  gravity(gravity:GravityParam): this {
    return this.addQualifier(gravity);
  }
}


export default ResizeAdvancedAction;
