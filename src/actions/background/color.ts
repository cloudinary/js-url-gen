import BackgroundAction from "./BackgroundAction";
import {prepareColor} from "../../utils/prepareColor";


/**
 * @memberOf Actions.Background
 * @description Sets the background color.
 * @param {string} color
 * @return {BackgroundAction}
 */
function color(color: string): BackgroundAction {
  return new BackgroundAction(prepareColor(color));
}

export default color;
