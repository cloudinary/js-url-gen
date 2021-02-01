import {FocusOnValue} from "./focusOn";
import {OCR} from "./gravity/OCR/OCR";
import {CompassGravity} from "./gravity/compassGravity/CompassGravity";
import {FocusOnGravity} from "./gravity/focusOnGravity/FocusOnGravity";
import {AutoGravity} from "./gravity/autoGravity/AutoGravity";
import {CompassQualifier} from "./gravity/qualifiers/compass/CompassQualifier";
import {XYCenterGravity} from "./gravity/xyCenterGravity/XYCenterGravity";


/**
 * @description Defines the gravity based on directional values from a compass.
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/image_transformations#control_gravity | Control gravity for images}
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/image_transformations#control_gravity | Control gravity for videos}
 * @param {Qualifiers.Compass} direction A compass Values
 * @memberOf Qualifiers.Gravity
 * @example image.resize(Resize.crop().width(300).gravity(Gravity.compass(Compass.north())))
 * @return {CompassGravity}
 */
function compass(direction: CompassQualifier): CompassGravity {
  return new CompassGravity(direction);
}

/**
 * @description Specifies what to focus on, for example: faces, objects, eyes, etc.
 * @param {...Qualifier.FocusOn} args One or more objects to focus on
 * @memberOf Qualifiers.Gravity
 * @example image.resize(Resize.crop().width(300).gravity(Gravity.focusOn(FocusOn.cat())))
 * @return {FocusOnGravity}
 */
function focusOn(...args: FocusOnValue[]): FocusOnGravity {

  const res = [...args];
  return new FocusOnGravity(res);
}

/**
 * @description Automatically identifies the most interesting regions in the asset, can be qualified further by including what to focus on.
 * @memberOf Qualifiers.Gravity
 * @return {Qualifiers.Gravity.AutoGravity}
 * @example image.resize(Resize.crop().width(300).gravity(Gravity.autoGravity()))
 * @example image.resize(Resize.crop().width(300).gravity(Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.cat()))))
 */
function autoGravity(): AutoGravity {
  return new AutoGravity();
}




/**
 * @description Detect all text elements in an image using the {@link https://cloudinary.com/documentation/image_transformations#control_gravity | OCR Text Detection and Extraction add-on} and use the detected bounding box coordinates as the basis of the transformation.
 * @memberOf Qualifiers.Gravity
 * @return {OCR}
 */
function ocr(): OCR {
  return new OCR();
}

/**
 * @description Set the center of gravity to the given x & y coordinates.
 * @memberOf Qualifiers.Gravity
 * @return {XYCenterGravity}
 */
function xyCenter() {
  return new XYCenterGravity();
}


/**
 * @description A qualifier that determines which part of an asset to focus on, and thus which part of the asset to keep, </br>
 *              when any part of the asset is cropped. For overlays, this setting determines where to place the overlay.
 * @namespace Gravity
 * @memberOf Qualifiers
 * @example image.resize(Resize.crop().width(300).gravity(Gravity.compass(Compass.north())))
 */
const Gravity = {
  compass: compass,
  autoGravity: autoGravity,
  focusOn: focusOn,
  ocr: ocr,
  xyCenter
};

export {
  Gravity,
  compass,
  autoGravity,
  focusOn,
  ocr,
  xyCenter
};
