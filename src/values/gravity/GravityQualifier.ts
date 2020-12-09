import Qualifier from "../../sdk/qualifier/Qualifier";
import QualifierValue from "../../sdk/qualifier/QualifierValue";
import {CompassGravity} from "./compassGravity/CompassGravity";
import {AutoGravity} from "./autoGravity/AutoGravity";
import {OCR} from "./OCR/OCR";
import {FocusOnGravity} from "./focusOnGravity/FocusOnGravity";
import {FocusOnValue} from "./qualifiers/focusOn/FocusOn";
import {AutoFocus} from "./qualifiers/autoFocus/AutoFocus";
import {CompassQualifier} from "./qualifiers/compass/CompassQualifier";

export type IGravity = CompassGravity | AutoGravity | OCR | FocusOnGravity;
export type IGravityValue = CompassQualifier | FocusOnValue | AutoFocus;


/**
 * @memberOf Gravity.GravityQualifier
 * @extends {SDK.Qualifier}
 */
class GravityQualifier extends Qualifier {
  /**
   * @param value, an array containing (GravityObject | AutoGravity | string) or a string;
   */
  constructor(value: IGravityValue | IGravityValue[] | string) {
    super('g', new QualifierValue(value));
  }
}

export {GravityQualifier};
