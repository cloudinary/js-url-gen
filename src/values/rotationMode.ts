
/**
 * @doc
 * @memberOf Values
 * @namespace RotationMode
 */



import {RotationModeQualifierValue} from "./rotate/RotationModeQualifierValue";

/**
 * @description Rotate image 90 degrees clockwise only if the requested aspect ratio does not match the image's aspect ratio.
 * @memberOf Values.RotationMode
 * @return {Values.RotationMode.RotationModeQualifierValue}
 */
function autoRight(): RotationModeQualifierValue {
  return new RotationModeQualifierValue('auto_right');
}

/**
 * @description Rotate image 90 degrees counterclockwise only if the requested aspect ratio does not match the image's aspect ratio.
 * @memberOf Values.RotationMode
 * @return {Values.RotationMode.RotationModeQualifierValue}
 */
function autoLeft(): RotationModeQualifierValue {
  return new RotationModeQualifierValue('auto_left');
}

/**
 * @description Vertical mirror flip of the image.
 * @memberOf Values.RotationMode
 * @return {Values.RotationMode.RotationModeQualifierValue}
 */
function verticalFlip(): RotationModeQualifierValue {
  return new RotationModeQualifierValue('vflip');
}

/**
 * @description Horizontal mirror flip of the image.
 * @memberOf Values.RotationMode
 * @return {Values.RotationMode.RotationModeQualifierValue}
 */
function horizontalFlip(): RotationModeQualifierValue {
  return new RotationModeQualifierValue('hflip');
}


/**
 * @description By default, the image is automatically rotated according to the EXIF data stored by the camera when the image
 *                           was taken. Set the angle to 'ignore' if you do not want the image to be automatically rotated.
 * @memberOf Values.RotationMode
 * @return {Values.RotationMode.RotationModeQualifierValue}
 */
function ignore(): RotationModeQualifierValue {
  return new RotationModeQualifierValue('ignore');
}


const RotationMode = {autoLeft, autoRight, horizontalFlip, ignore, verticalFlip};
export {
  RotationMode,
  autoLeft,
  autoRight,
  horizontalFlip,
  ignore,
  verticalFlip
};
