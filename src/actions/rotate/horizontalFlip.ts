import {RotateAction} from "./Rotate";
import {IRotateAction} from "./IRotateAction";

/**
 * @memberOf Actions.Rotate
 * @description Horizontal mirror flip of the image.
 * @returns {RotateAction}
 */
function horizontalFlip() :IRotateAction {
  return new RotateAction().horizontalFlip();
}

export default horizontalFlip;
