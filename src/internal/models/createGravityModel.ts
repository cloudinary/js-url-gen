import {IGravity} from "../../qualifiers/gravity/GravityQualifier.js";
import {ICompassGravity} from "../../qualifiers/gravity/compassGravity/CompassGravity.js";

export interface IGravityModel{
  gravityType?: string;
}

export interface ICompassGravityModel extends IGravityModel{
  compass: ICompassGravity
}

export interface IOcrGravityModel extends IGravityModel{}

/**
 * Validate that given val is an ICompassGravity
 * @param val
 */
function isICompassGravity(val: unknown): val is ICompassGravity{
  return ['north', 'center', 'east', 'west', 'south', 'north_west', 'south_east', 'south_west', 'north_east'].includes(val as string);
}

/**
 * Creates a compassGravity model
 * @param compass
 */
function createCompassGravityModel(compass: ICompassGravity): ICompassGravityModel{
  return {
    compass,
    gravityType: 'direction'
  };
}

/**
 * Validate that given string represents an ocr gravity
 * @param gravity
 */
function isIOcrGravity(gravity: string): boolean {
  return gravity === 'ocr_text';
}

/**
 * Creates an ocr gravity model
 */
function createOcrGravityModel(): IOcrGravityModel {
  return {
    gravityType: 'ocr'
  };
}

/**
 * Create a model of given gravity
 * @param gravity
 */
export function createGravityModel(gravity: IGravity): IGravityModel {
  const gravityString = `${(typeof gravity === "string" ? gravity : gravity.qualifierValue)}`;

  if (isICompassGravity(gravityString)) {
    return createCompassGravityModel(gravityString);
  }

  if (isIOcrGravity(gravityString)) {
    return createOcrGravityModel();
  }

  /*
  if (isIAutoGravity(gravityString)) {
    return createAutoGravityModel(gravityString);
  }

  if (isIFocusOnGravity(gravityString)) {
    return createFocusOnGravityModel(gravityString);
  }
   */
}
