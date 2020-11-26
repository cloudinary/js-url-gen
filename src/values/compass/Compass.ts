import {GravityQualifier} from "../gravity/Gravity";


/**
 * @description Defines the focal Compass for certain methods of cropping.
 * @namespace Compass
 * @memberOf Values
 */
class Compass extends GravityQualifier{
  private type: 'Compass' // Creates a unique type of TypeScript so it can distinguish between Gravity and Compass

  /**
   * @memberOf Values.Compass
   * @description South center part (bottom center).
   * @return {Compass} Compass
   */
  static south():Compass {
    return new Compass('south');
  }

  /**
   * @memberOf Values.Compass
   * @description North center part (top center).
   * @return {Compass} Compass
   */
  static north():Compass {
    return new Compass('north');
  }

  /**
   * @memberOf Values.Compass
   * @description Middle east part (right).
   * @return {Compass} Compass
   */
  static east():Compass {
    return new Compass('east');
  }

  /**
   * @memberOf Values.Compass
   * @description Middle west part (left).
   * @return {Compass} Compass
   */
  static west():Compass {
    return new Compass('west');
  }

  /**
   * @memberOf Values.Compass
   * @description North west corner (top left).
   * @return {Compass} Compass
   */
  static northWest(): Compass {
    return new Compass('north_west');
  }

  /**
   * @memberOf Values.Compass
   * @description North east corner (top right).
   * @return {Compass} Compass
   */
  static northEast(): Compass {
    return new Compass('north_east');
  }

  /**
   * @memberOf Values.Compass
   * @description South west corner (bottom left).
   * @return {Compass} Compass
   */
  static southWest(): Compass {
    return new Compass('south_west');
  }

  /**
   * @memberOf Values.Compass
   * @description South east corner (bottom right).
   * @return {Compass} Compass
   */
  static southEast(): Compass {
    return new Compass('south_east');
  }

  /**
   * @memberOf Values.Compass
   * @description The center of the image.
   * @return {Compass} Compass
   */
  static center(): Compass {
    return new Compass('center');
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
