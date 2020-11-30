import BorderAction from "./BorderAction";
import {SystemColors} from "../../values/color/Color";

/**
 * @memberOf Actions.Border
 * @description Sets the style of the border.
 * @return {BorderAction}
 */
function solid(color: SystemColors, width: number): BorderAction {
  return new BorderAction('solid', color, width);
}

export default solid;
