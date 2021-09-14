import RotateAction from "./RotateAction.js";
import {RotationModeQualifierValue} from "../../qualifiers/rotate/RotationModeQualifierValue.js";
import {RotationModeType} from "../../types/types.js";

/**
 * @summary action
 * @description Rotate an image by using a rotationMode
 * @param {RotationModeType|string} rotationMode
 * For a list of supported rotation modes see {@link Qualifiers.RotationMode| types of rotation modes} for
 * possible values
 * @memberOf Actions.Rotate
 * @return {Actions.Rotate.RotateAction}
 */
function mode(rotationMode: RotationModeQualifierValue | RotationModeType | string) :RotateAction {
  return new RotateAction().mode(rotationMode);
}

export default mode;
