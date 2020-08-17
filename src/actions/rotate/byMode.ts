import {RotateAction} from "./RotateAction";
import {IRotateAction} from "./IRotateAction";

/**
 * @memberOf Actions.Rotate
 * @description Rotate an image by using a rotationMode
 * @param {string} rotationMode
 * @returns {RotateAction}
 */
function byMode(rotationMode: string) :IRotateAction {
  return new RotateAction().mode(rotationMode);
}

export default byMode;
