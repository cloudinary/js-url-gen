import Rotate from "./Rotate";
import {IRotateAction} from "./IRotateAction";

/**
 * Create a new Rotate action with horizontal flip
 */
function horizontalFlip() :IRotateAction {
  return new Rotate().horizontalFlip();
}

export default horizontalFlip;