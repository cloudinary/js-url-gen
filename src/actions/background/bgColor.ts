import {prepareColor} from "../../utils/prepareColor";
import {BackgroundColorAction} from "./actions/BackgroundColorAction";

/**
 * @memberOf Actions.Background
 * @description Sets the background color.
 * @param {string} color
 * @return {BackgroundColorAction}
 */
function bgColor(color: string): BackgroundColorAction {
  return new BackgroundColorAction(prepareColor(color));
}

// Make the function name less confusing, but still export the match the agreed specification
export {bgColor as color};
