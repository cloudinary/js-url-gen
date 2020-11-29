import {prepareColor} from "../../utils/prepareColor";
import {BackgroundColorAction} from "./actions/BackgroundColorAction";
import {SystemColors} from "../../values/color/Color";

/**
 * @memberOf Actions.Background
 * @description Sets the background color.
 * @param {string} color
 * @return {BackgroundColorAction}
 */
function bgColor(color: SystemColors): BackgroundColorAction {
  return new BackgroundColorAction(prepareColor(color));
}

// Make the function name less confusing, but still export the match the agreed specification
export {bgColor as color};
