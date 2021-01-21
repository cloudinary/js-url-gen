import {CompassQualifier} from "./gravity/qualifiers/compass/CompassQualifier";


/**
 * @memberOf Values.Compass
 * @description South center part (bottom center).
 * @return {Values.Compass.CompassQualifier} Compass
 */
function south(): CompassQualifier {
  return new CompassQualifier('south');
}

/**
 * @memberOf Values.Compass
 * @description North center part (top center).
 * @return {Values.Compass.CompassQualifier} Compass
 */
function north(): CompassQualifier {
  return new CompassQualifier('north');
}

/**
 * @memberOf Values.Compass
 * @description Middle east part (right).
 * @return {Values.Compass.CompassQualifier} Compass
 */
function east(): CompassQualifier {
  return new CompassQualifier('east');
}

/**
 * @memberOf Values.Compass
 * @description Middle west part (left).
 * @return {Values.Compass.CompassQualifier} Compass
 */
function west(): CompassQualifier {
  return new CompassQualifier('west');
}

/**
 * @memberOf Values.Compass
 * @description North west corner (top left).
 * @return {Values.Compass.CompassQualifier} Compass
 */
function northWest(): CompassQualifier {
  return new CompassQualifier('north_west');
}

/**
 * @memberOf Values.Compass
 * @description North east corner (top right).
 * @return {Values.Compass.CompassQualifier} Compass
 */
function northEast(): CompassQualifier {
  return new CompassQualifier('north_east');
}

/**
 * @memberOf Values.Compass
 * @description South west corner (bottom left).
 * @return {Values.Compass.CompassQualifier} Compass
 */
function southWest(): CompassQualifier {
  return new CompassQualifier('south_west');
}

/**
 * @memberOf Values.Compass
 * @description South east corner (bottom right).
 * @return {Values.Compass.CompassQualifier} Compass
 */
function southEast(): CompassQualifier {
  return new CompassQualifier('south_east');
}

/**
 * @memberOf Values.Compass
 * @description The center of the image.
 * @return {Values.Compass.CompassQualifier} Compass
 */
function center(): CompassQualifier {
  return new CompassQualifier('center');
}




/**
 * @description Defines the focal Compass for certain methods of cropping.
 * @namespace Compass
 * @memberOf Values
 */
class Compass {
  static north = north;
  static west = west;
  static east = east;
  static south =south;
  static center = center
  static northWest =northWest
  static southEast =southEast;
  static southWest = southWest;
  static northEast =northEast;
}


export {
  Compass,
  north,
  west,
  east,
  south,
  center,
  northWest,
  southEast,
  southWest,
  northEast
};
