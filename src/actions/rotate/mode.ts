import {RotateAction} from "./RotateAction";

/**
 * @memberOf Actions.Rotate
 * @description Rotate an image by using a rotationMode
 * @param {string} rotationMode
 * @return {RotateAction}
 */
function mode(rotationMode: string) :RotateAction {
  return new RotateAction().mode(rotationMode);
}

export default mode;
