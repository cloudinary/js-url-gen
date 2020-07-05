import Rotate from "./Rotate";
import {IRotateAction} from "./IRotateAction";

/**
 * @param angle
 */
function angle(angle: number) :IRotateAction {
  return new Rotate(angle);
}

export default angle;