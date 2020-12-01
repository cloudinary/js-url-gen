import Qualifier from "../../qualifier/Qualifier";
import QualifierValue from "../../qualifier/QualifierValue";
import {CompassGravity} from "./compassGravity/CompassGravity";
import {AutoGravity} from "./autoGravity/AutoGravity";
import {OCR} from "./OCR/OCR";
import {FocusOnGravity} from "./focusOnGravity/FocusOnGravity";
import {Compass} from "./qualifiers/compass/Compass";
import {FocusOn} from "./qualifiers/focusOn/FocusOn";
import {AutoFocus} from "./qualifiers/autoFocus/AutoFocus";

export type IGravity = CompassGravity | AutoGravity | OCR | FocusOnGravity;
export type IGravityValue = Compass | FocusOn | AutoFocus;


class GravityQualifier extends Qualifier {
  /**
   * @param value, an array containing (GravityObject | AutoGravity | string) or a string;
   */
  constructor(value: IGravityValue | IGravityValue[] | string) {
    super('g', new QualifierValue(value));
  }
}

export {GravityQualifier};
