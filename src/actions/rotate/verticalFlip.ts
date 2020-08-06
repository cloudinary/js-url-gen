import {RotateAction} from "./Rotate";
import {IRotateAction} from "./IRotateAction";

/**
 * @memberOf Actions.Rotate
 * @description Vertical mirror flip of the image.
 * @returns {RotateAction}
 */
function verticalFlip() :IRotateAction {
  return new RotateAction().verticalFlip();
}

export default verticalFlip;
