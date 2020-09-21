import Action from "../../actions/Action";
import {GravityParam} from "../gravity/Gravity";
import Qualifier from "../../qualifier/Qualifier";

/**
 * @description Defines the focal gravity for overlays
 * @namespace Position
 * @memberOf Values
 */


/**
 * Even though Position is technically an actionParam, it implements exactly the same functionality as an action.
 * This is true because Position is actually multiParam
 */
class Position extends Action {
  constructor(positionDirection:string) {
    super();
    this.addQualifier(new GravityParam(positionDirection));
  }

  /**
   * Set the X Offset
   * @param {number} offsetX
   */
  x(offsetX:number): this{
    return this.addQualifier(new Qualifier('x', offsetX));
  }

  /**
   * Set the Y Offset
   * @param {number} offsetY
   */
  y(offsetY:number): this{
    return this.addQualifier(new Qualifier('y', offsetY));
  }
}

/**
 * @memberOf Values.Position
 * @description South center part (bottom center).
 * @return {Position} Position
 */
function south():Position {
  return new Position('south');
}

/**
 * @memberOf Values.Position
 * @description North center part (top center).
 * @return {Position} Position
 */
function north():Position {
  return new Position('north');
}

/**
 * @memberOf Values.Position
 * @description Middle east part (right).
 * @return {Position} Position
 */
function east():Position {
  return new Position('east');
}

/**
 * @memberOf Values.Position
 * @description Middle west part (left).
 * @return {Position} Position
 */
function west():Position {
  return new Position('west');
}

/**
 * @memberOf Values.Position
 * @description Detects the largest face in an image with the Advanced Facial Attribute Detection add-on and makes it the focus of the transformation.
 * @return {Position} Position
 */
function advancedFace():Position {
  return new Position('adv_face');
}

/**
 * @memberOf Values.Position
 * @description Detects all faces in an image with the Advanced Facial Attribute Detection add-on and makes them the focus of the transformation.
 * @return {Position} Position
 */
function advancedFaces():Position {
  return new Position('adv_faces');
}

/**
 * @memberOf Values.Position
 * @description Detects all eyes in an image with the Advanced Facial Attribute Detection add-on and makes them the focus of the transformation.
 * @return {Position} Position
 */
function advancedEyes():Position {
  return new Position('adv_eyes');
}

/**
 * @memberOf Values.Position
 * @description North west corner (top left).
 * @return {Position} Position
 */
function northWest():Position {
  return new Position('north_west');
}

/**
 * @memberOf Values.Position
 * @description North east corner (top right).
 * @return {Position} Position
 */
function northEast():Position {
  return new Position('north_east');
}

/**
 * @memberOf Values.Position
 * @description South west corner (bottom left).
 * @return {Position} Position
 */
function southWest():Position {
  return new Position('south_west');
}

/**
 * @memberOf Values.Position
 * @description South east corner (bottom right).
 * @return {Position} Position
 */
function southEast():Position {
  return new Position('south_east');
}

/**
 * @memberOf Values.Position
 * @description
 * Detects all text elements in an image using the OCR Text Detection and Extraction add-on</br>
 * and uses the detected bounding box coordinates as the focus of the transformation.
 * @return {Position} Position
 */
function ocrText():Position {
  return new Position('ocr_text');
}

/**
 * @memberOf Values.Position
 * @description Detects the largest face in the asset and makes it the focus of the transformation.
 * @return {Position} Position
 */
function face():Position {
  return new Position('face');
}

/**
 * @memberOf Values.Position
 * @description Detects all the faces in the asset and makes them the focus of the transformation.
 * @return {Position} Position
 */
function faces():Position {
  return new Position('faces');
}

/**
 * @memberOf Values.Position
 * @description The center of the image.
 * @return {Position} Position
 */
function center():Position {
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
