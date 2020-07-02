import Rotate from "./Rotate";
import {IRotateAction} from "./IRotateAction";

/**
 * Create a new Rotate action with vertical flip
 */
function verticalFlip() :IRotateAction {
  return new Rotate().verticalFlip();
}

export default verticalFlip;