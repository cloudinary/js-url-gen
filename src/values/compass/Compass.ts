import {GravityQualifier} from "../gravity/Gravity";

/**
 * @description Defines the focal Compass for certain methods of cropping.
 * @namespace Compass
 * @memberOf Values
 */
class Compass {
  /**
   * @memberOf Values.Compass
   * @description South center part (bottom center).
   * @return {GravityQualifier} CompassParam
   */
  static south():GravityQualifier {
    return new GravityQualifier('south');
  }

  /**
   * @memberOf Values.Compass
   * @description North center part (top center).
   * @return {GravityQualifier} CompassParam
   */
  static north():GravityQualifier {
    return new GravityQualifier('north');
  }

  /**
   * @memberOf Values.Compass
   * @description Middle east part (right).
   * @return {GravityQualifier} CompassParam
   */
  static east():GravityQualifier {
    return new GravityQualifier('east');
  }

  /**
   * @memberOf Values.Compass
   * @description Middle west part (left).
   * @return {GravityQualifier} CompassParam
   */
  static west():GravityQualifier {
    return new GravityQualifier('west');
  }

  /**
   * @memberOf Values.Compass
   * @description North west corner (top left).
   * @return {GravityQualifier} CompassParam
   */
  static northWest(): GravityQualifier {
    return new GravityQualifier('north_west');
  }

  /**
   * @memberOf Values.Compass
   * @description North east corner (top right).
   * @return {GravityQualifier} CompassParam
   */
  static northEast(): GravityQualifier {
    return new GravityQualifier('north_east');
  }

  /**
   * @memberOf Values.Compass
   * @description South west corner (bottom left).
   * @return {GravityQualifier} CompassParam
   */
  static southWest(): GravityQualifier {
    return new GravityQualifier('south_west');
  }

  /**
   * @memberOf Values.Compass
   * @description South east corner (bottom right).
   * @return {GravityQualifier} CompassParam
   */
  static southEast(): GravityQualifier {
    return new GravityQualifier('south_east');
  }

  /**
   * @memberOf Values.Compass
   * @description The center of the image.
   * @return {GravityQualifier} CompassParam
   */
  static center(): GravityQualifier {
    return new GravityQualifier('center');
  }

}

const {
  north,
  west,
  east,
  south,
  center,
  northWest,
  southEast,
  southWest,
  northEast
} = Compass;

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
