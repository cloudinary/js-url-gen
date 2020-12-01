import {Compass} from "./qualifiers/compass/Compass";
import {FocusOn} from "./qualifiers/focusOn/FocusOn";
import {OCR} from "./OCR/OCR";
import {CompassGravity} from "./compassGravity/CompassGravity";
import {FocusOnGravity} from "./focusOnGravity/FocusOnGravity";
import {AutoGravity} from "./autoGravity/AutoGravity";


/**
 * @description Defines the focal gravity for certain methods of cropping.
 * @namespace Gravity
 * @memberOf Values
 * @example image.resize(Resize.crop().width(300).gravity(Gravity.compass(Compass.north())))
 */
class Gravity {
  /**
   * @doc
   * @param {Values.Compass} direction A compass Values
   * @memberOf Values.Gravity
   * @example image.resize(Resize.crop().width(300).gravity(Gravity.compass(Compass.north())))
   * @return {CompassGravity}
   */
  static compass(direction: Compass): CompassGravity {
    return new CompassGravity(direction);
  }

  /**
   * @doc
   * @param {...Values.FocusOn} args One or more objects to focus on
   * @memberOf Values.Gravity
   * @example image.resize(Resize.crop().width(300).gravity(Gravity.focusOn(FocusOn.cat())))
   * @return {FocusOnGravity}
   */
  static focusOn(...args: FocusOn[]): FocusOnGravity {

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
  static autoGravity(): AutoGravity {
    return new AutoGravity();
  }

  /**
   * @doc
   * @memberOf Values.Gravity
   * @return {OCR}
   */
  static ocr(): OCR {
    return new OCR();
  }
}

const {compass, autoGravity, focusOn, ocr} = Gravity;


export {
  Gravity,
  compass,
  autoGravity,
  focusOn,
  ocr
};
