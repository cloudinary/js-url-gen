import {RotateAction} from "./RotateAction";

/**
 * @memberOf Actions.Rotate
 * @description Rotate an image by using a rotationMode
 * @param {string} rotationMode
 * For a list of supported rotation modes see {@link Values.rotationModeValues| types of rotation modes} for
 * possible values
 * @return {RotateAction}
 */
function mode(rotationMode: string) :RotateAction {
  return new RotateAction().mode(rotationMode);
}

export default mode;
