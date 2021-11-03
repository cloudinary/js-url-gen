import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {QualifierValue} from "../../internal/qualifier/QualifierValue.js";
import {CompassGravity, ICompassGravity} from "./compassGravity/CompassGravity.js";
import {AutoGravity} from "./autoGravity/AutoGravity.js";
import {FocusOnGravity} from "./focusOnGravity/FocusOnGravity.js";
import {FocusOnValue} from "../focusOn.js";
import {AutoFocus} from "../autoFocus.js";
import {CompassQualifier} from "./qualifiers/compass/CompassQualifier.js";
import {XYCenterGravity} from "./xyCenterGravity/XYCenterGravity.js";

export type IGravityString = 'auto' | ICompassGravity;
export type IGravity = CompassGravity | AutoGravity | FocusOnGravity | XYCenterGravity | IGravityString;
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
