import {RotateAction} from "./RotateAction";
import {IRotateAction} from "./IRotateAction";

/**
 * @memberOf Actions.Rotate
 * @description Rotate an image by the given degrees.
 * @param {number} angle
 * @returns {RotateAction}
 */
function byAngle(angle: number) :IRotateAction {
  return new RotateAction(angle);
}


export default byAngle;
