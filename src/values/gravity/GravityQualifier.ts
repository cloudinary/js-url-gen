import Qualifier from "../../qualifier/Qualifier";
import QualifierValue from "../../qualifier/QualifierValue";
import {CompassGravity} from "./compassGravity/CompassGravity";
import {AutoGravity} from "./autoGravity/AutoGravity";
import {OCR} from "./OCR/OCR";
import {FocusOnGravity} from "./focusOnGravity/FocusOnGravity";
import {Compass} from "./qualifiers/compass/Compass";
import {FocusOn} from "./qualifiers/focusOn/FocusOn";
import {AutoFocus} from "./qualifiers/autoFocus/AutoFocus";

export type IAnyGravity = CompassGravity | AutoGravity | OCR | FocusOnGravity;
export type IAnyGravityValue = Compass | FocusOn | AutoFocus;


class GravityQualifier extends Qualifier {
  /**
   * @param value, an array containing (GravityObject | AutoGravity | string) or a string;
   */
  constructor(value: IAnyGravityValue | IAnyGravityValue[] | string) {
    super('g', new QualifierValue(value));
  }
}

export {GravityQualifier};
