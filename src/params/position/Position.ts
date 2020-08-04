import Action from "../../actions/Action";
import {GravityParam} from "../gravity/Gravity";
import Param from "../../parameters/Param";

/**
 * Even though Position is technically an actionParam, it implements exactly the same functionality as an action.
 * This is true because Position is actually multiParam
 */
class Position extends Action {
  constructor(positionDirection:string) {
    super();
    this.addParam(new GravityParam(positionDirection));
  }

  x(offsetX:number): this{
    return this.addParam(new Param('x', offsetX));
  }

  y(offsetY:number): this{
    return this.addParam(new Param('y', offsetY));
  }
}


/**
 * @description Creates a Position
 * @return {Position} Position
 */
function south():Position {
  return new Position('south');
}

/**
 * @description Creates a Position
 * @return {Position} Position
 */
function north():Position {
  return new Position('north');
}

/**
 * @description Creates a Position
 * @return {Position} Position
 */
function east():Position {
  return new Position('east');
}

/**
 * @description Creates a Position
 * @return {Position} Position
 */
function west():Position {
  return new Position('west');
}

/**
 * @description Creates a Position
 * @return {Position} Position
 */
function advancedFace(): Position {
  return new Position('adv_face');
}

/**
 * @description Creates a Position
 * @return {Position} Position
 */
function advancedFaces(): Position {
  return new Position('adv_faces');
}

/**
 * @description Creates a Position
 * @return {Position} Position
 */
function advancedEyes(): Position {
  return new Position('adv_eyes');
}

/**
 * @description Creates a Position
 * @return {Position} Position
 */
function northWest(): Position {
  return new Position('north_west');
}

/**
 * @description Creates a Position
 * @return {Position} Position
 */
function northEast(): Position {
  return new Position('north_east');
}

/**
 * @description Creates a Position
 * @return {Position} Position
 */
function southWest(): Position {
  return new Position('south_east');
}

/**
 * @description Creates a Position
 * @return {Position} Position
 */
function southEast(): Position {
  return new Position('south_east');
}

/**
 * @description Creates a Position
 * @return {Position} Position
 */
function ocrText(): Position {
  return new Position('ocr_text');
}

/**
 * @description Creates a Position
 * @return {Position} Position
 */
function face(): Position {
  return new Position('face');
}

/**
 * @description Creates a Position
 * @return {Position} Position
 */
function faces(): Position {
  return new Position('faces');
}

/**
 * @description Creates a Position
 * @return {Position} Position
 */
function center(): Position {
  return new Position('center');
}


export {
  north,
  west,
  east,
  south,
  advancedEyes,
  advancedFace,
  advancedFaces,
  center,
  face,
  northWest,
  faces,
  ocrText,
  southEast,
  southWest,
  northEast,
  Position
};

export default {
  north,
  west,
  east,
  south,
  advancedEyes,
  advancedFace,
  advancedFaces,
  center,
  face,
  northWest,
  faces,
  ocrText,
  southEast,
  southWest,
  northEast,
  Position
};
