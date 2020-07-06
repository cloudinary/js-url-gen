import {RotateAction} from "./Rotate";
import {IRotateAction} from "./IRotateAction";

/**
 * @param angle
 */
function angle(angle: number) :IRotateAction {
  return new RotateAction(angle);
}

export default angle;
