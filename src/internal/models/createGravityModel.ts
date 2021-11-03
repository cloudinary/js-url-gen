import {IGravity} from "../../qualifiers/gravity/GravityQualifier.js";
import {ICompassGravity, isICompassGravity} from "../../qualifiers/gravity/compassGravity/CompassGravity.js";

export interface IGravityModel{
  gravityType: string;
}

export interface ICompassGravityModel extends IGravityModel{
  compass: ICompassGravity
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
 * Create a model of given gravity
 * @param gravity
 */
export function createGravityModel(gravity: IGravity): ICompassGravityModel | string {
  const gravityString = (typeof gravity === "string" ? gravity : (gravity).qualifierValue) as string;

  if (isICompassGravity(gravityString)) {
    return createCompassGravityModel(gravityString);
  }

  return gravityString;
}
