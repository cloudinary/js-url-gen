import {FocusOnValue} from "./focusOn";
import {OCR} from "./gravity/OCR/OCR";
import {CompassGravity} from "./gravity/compassGravity/CompassGravity";
import {FocusOnGravity} from "./gravity/focusOnGravity/FocusOnGravity";
import {AutoGravity} from "./gravity/autoGravity/AutoGravity";
import {CompassQualifier} from "./gravity/qualifiers/compass/CompassQualifier";
import {XYCenterGravity} from "./gravity/xyCenterGravity/XYCenterGravity";


/**
 * @doc
 * @param {Values.Compass} direction A compass Values
 * @memberOf Values.Gravity
 * @example image.resize(Resize.crop().width(300).gravity(Gravity.compass(Compass.north())))
 * @return {CompassGravity}
 */
function compass(direction: CompassQualifier): CompassGravity {
  return new CompassGravity(direction);
}

/**
 * @doc
 * @param {...Values.FocusOn} args One or more objects to focus on
 * @memberOf Values.Gravity
 * @example image.resize(Resize.crop().width(300).gravity(Gravity.focusOn(FocusOn.cat())))
 * @return {FocusOnGravity}
 */
function focusOn(...args: FocusOnValue[]): FocusOnGravity {

  const res = [...args];
  return new FocusOnGravity(res);
}

/**
 * @doc
 * @memberOf Values.Gravity
 * @return {Values.Gravity.AutoGravity}
 * @example image.resize(Resize.crop().width(300).gravity(Gravity.autoGravity()))
 * @example image.resize(Resize.crop().width(300).gravity(Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.cat()))))
 */
function autoGravity(): AutoGravity {
  return new AutoGravity();
}

/**
 * @doc
 * @memberOf Values.Gravity
 * @return {OCR}
 */
function ocr(): OCR {
  return new OCR();
}

/**
 * @doc
 * @memberOf Values.Gravity
 * @return {XYCenterGravity}
 */
function xyCenter() {
  return new XYCenterGravity();
}


/**
 * @description Defines the focal gravity for certain methods of cropping.
 * @namespace Gravity
 * @memberOf Values
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
