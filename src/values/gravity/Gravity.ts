/**
 * @description Defines the focal gravity for certain methods of cropping.
 * @namespace Gravity
 * @memberOf Values
 */

import {Compass} from "./qualifiers/compass/Compass";
import {FocusOn} from "./qualifiers/focusOn/FocusOn";
import {OCR} from "./OCR/OCR";
import {CompassGravity} from "./compassGravity/CompassGravity";
import {FocusOnGravity} from "./focusOnGravity/FocusOnGravity";
import {AutoGravity} from "./autoGravity/AutoGravity";

class Gravity {
  // Done
  static compass(direction: Compass): CompassGravity {
    return new CompassGravity(direction);
  }

  // Done
  static focusOn(...args: FocusOn[]): FocusOnGravity {
    const res = [...args];
    return new FocusOnGravity(res);
  }

  // Done
  static autoGravity(): AutoGravity {
    return new AutoGravity();
  }

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

