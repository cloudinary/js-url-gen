import {RotateAction} from "./RotateAction";

/**
 * @memberOf Actions.Rotate
 * @description Rotate an image by the given degrees.
 * @param {number} angle
 * @returns {RotateAction}
 */
function byAngle(angle: number) :RotateAction {
  return new RotateAction(angle);
}


export default byAngle;
