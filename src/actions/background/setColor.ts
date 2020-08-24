import BackgroundAction from "./BackgroundAction";
import {IBackgroundAction} from "./IBackgroundAction";
import {prepareColor} from "../../utils/prepareColor";


/**
 * Applies background color.
 */
function setColor(color: string): IBackgroundAction{
  return new BackgroundAction(prepareColor(color));

}

export default setColor;
