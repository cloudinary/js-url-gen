import {RotateAction} from "./Rotate";
import {IRotateAction} from "./IRotateAction";

/**
 * Create a new Rotate action with horizontal flip
 */
function horizontalFlip() :IRotateAction {
  return new RotateAction().horizontalFlip();
}

export default horizontalFlip;
