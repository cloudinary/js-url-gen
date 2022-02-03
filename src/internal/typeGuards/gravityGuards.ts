import {CompassGravity} from "../../qualifiers/gravity/compassGravity/CompassGravity.js";
import {AutoGravity} from "../../qualifiers/gravity/autoGravity/AutoGravity.js";
import {
  getGravityValue, IAutoGravityModel,
  IAutoGravityString,
  ICompassGravityModel,
  IGravityModel, IOcrGravityModel
} from "../models/createGravityModel.js";

/**
 * true if gravity starts with 'auto' or 'auto:'
 * @param gravity
 */
export function isIAutoGravityString(gravity: unknown): gravity is IAutoGravityString {
  return gravity && `${gravity}`.split(':')[0] === 'auto';
}

/**
 * Validate that given val is an ICompassGravity
 * @param gravity
 */
export function isCompassGravity(gravity: unknown): gravity is CompassGravity {
  //const gravityString = `${(typeof gravity === "string" ? gravity : gravity.qualifierValue)}`;
  const gravityValue = getGravityValue(gravity);
  return ['north', 'center', 'east', 'west', 'south', 'north_west', 'south_east', 'south_west', 'north_east'].includes(gravityValue);
}

/**
 * Validate that given gravity is an instance of ocr gravity
 * @param gravity
 */
export function isOcrGravity(gravity: unknown): boolean {
  return getGravityValue(gravity) === 'ocr_text';
}

/**
 * Validate that given gravity is an instance of AutoGravity
 * @param gravity
 */
export function isAutoGravity(gravity: unknown): gravity is AutoGravity {
  return `${(gravity as AutoGravity).qualifierValue}`.split(':')[0] === 'auto';
}

/**
 * Validates that gravityModel is an ICompassGravityModel
 * @param gravityModel
 */
export function isCompassGravityModel(gravityModel: IGravityModel): gravityModel is ICompassGravityModel {
  return gravityModel.gravityType === 'direction';
}

/**
 * Validates that gravityModel is an IOcrGravityModel
 * @param gravityModel
 */
export function isOcrGravityModel(gravityModel: IGravityModel): gravityModel is IOcrGravityModel {
  return gravityModel.gravityType === 'ocr';
}

/**
 * Validates that gravityModel is an IAutoGravityModel
 * @param gravityModel
 */
export function isAutoGravityModel(gravityModel: IGravityModel): gravityModel is IAutoGravityModel {
  return gravityModel.gravityType === 'auto';
}
