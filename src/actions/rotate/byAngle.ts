import RotateAction from "./RotateAction";

/**
 * @summary action
 * @memberOf Actions.Rotate
 * @description Rotate an image by the given degrees.
 * @param {number} angle Given degrees. (Range: 0 to 360, Default: 0).
 * @return {RotateAction}
 */
function byAngle(angle: number) :RotateAction {
  return new RotateAction(angle);
}


export default byAngle;
