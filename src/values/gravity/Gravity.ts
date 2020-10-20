/**
 * @description Defines the focal gravity for certain methods of cropping.
 * @namespace Gravity
 * @memberOf Values
 */

import Qualifier from "../../qualifier/Qualifier";
import {AutoGravity, GravityObject} from "../gravityObjects/GravityObjects";
import QualifierValue from "../../qualifier/QualifierValue";


export class GravityQualifier extends Qualifier {
  /**
   * @param gravityParamValue, an array containing (GravityObject | AutoGravity | string) or a string;
   */
  constructor(gravityQualifierValue: (GravityObject | AutoGravity | string)[] | string) {
    super('g', new QualifierValue(gravityQualifierValue));
  }
}


/**
 * @memberOf Values.Gravity
 * @description South center part (bottom center).
 * @return {GravityQualifier} GravityParam
 */
function south():GravityQualifier {
  return new GravityQualifier('south');
}

/**
 * @memberOf Values.Gravity
 * @description North center part (top center).
 * @return {GravityQualifier} GravityParam
 */
function north():GravityQualifier {
  return new GravityQualifier('north');
}

/**
 * @memberOf Values.Gravity
 * @description Middle east part (right).
 * @return {GravityQualifier} GravityParam
 */
function east():GravityQualifier {
  return new GravityQualifier('east');
}

/**
 * @memberOf Values.Gravity
 * @description Middle west part (left).
 * @return {GravityQualifier} GravityParam
 */
function west():GravityQualifier {
  return new GravityQualifier('west');
}

/**
 * @memberOf Values.Gravity
 * @description Detects the largest face in an image with the Advanced Facial Attribute Detection add-on and makes it the focus of the transformation.
 * @return {GravityQualifier} GravityParam
 */
function advancedFace(): GravityQualifier {
  return new GravityQualifier('adv_face');
}

/**
 * @memberOf Values.Gravity
 * @description Detects all faces in an image with the Advanced Facial Attribute Detection add-on and makes them the focus of the transformation.
 * @return {GravityQualifier} GravityParam
 */
function advancedFaces(): GravityQualifier {
  return new GravityQualifier('adv_faces');
}

/**
 * @memberOf Values.Gravity
 * @description Detects all eyes in an image with the Advanced Facial Attribute Detection add-on and makes them the focus of the transformation.
 * @return {GravityQualifier} GravityParam
 */
function advancedEyes(): GravityQualifier {
  return new GravityQualifier('adv_eyes');
}

/**
 * @memberOf Values.Gravity
 * @description North west corner (top left).
 * @return {GravityQualifier} GravityParam
 */
function northWest(): GravityQualifier {
  return new GravityQualifier('north_west');
}

/**
 * @memberOf Values.Gravity
 * @description North east corner (top right).
 * @return {GravityQualifier} GravityParam
 */
function northEast(): GravityQualifier {
  return new GravityQualifier('north_east');
}

/**
 * @memberOf Values.Gravity
 * @description South west corner (bottom left).
 * @return {GravityQualifier} GravityParam
 */
function southWest(): GravityQualifier {
  return new GravityQualifier('south_west');
}

/**
 * @memberOf Values.Gravity
 * @description South east corner (bottom right).
 * @return {GravityQualifier} GravityParam
 */
function southEast(): GravityQualifier {
  return new GravityQualifier('south_east');
}

/**
 * @memberOf Values.Gravity
 * @description
 * Detects all text elements in an image using the OCR Text Detection and Extraction add-on</br>
 * and uses the detected bounding box coordinates as the focus of the transformation.
 * @return {GravityQualifier} GravityParam
 */
function ocrText(): GravityQualifier {
  return new GravityQualifier('ocr_text');
}

/**
 * @memberOf Values.Gravity
 * @description Detects the largest face in the asset and makes it the focus of the transformation.
 * @return {GravityQualifier} GravityParam
 */
function face(): GravityQualifier {
  return new GravityQualifier('face');
}

/**
 * @memberOf Values.Gravity
 * @description Detects all the faces in the asset and makes them the focus of the transformation.
 * @return {GravityQualifier} GravityParam
 */
function faces(): GravityQualifier {
  return new GravityQualifier('faces');
}

/**
 * @memberOf Values.Gravity
 * @description The center of the image.
 * @return {GravityQualifier} GravityParam
 */
function center(): GravityQualifier {
  return new GravityQualifier('center');
}

/**
 * @memberOf Values.Gravity
 * @description
 * TODO : (This is not accurate in JS)</br>
 * Creates a new instance of the ObjectGravity.
 * @return {GravityQualifier} GravityParam
 */
function object(...args: GravityObject[]): GravityQualifier {
  return new GravityQualifier(args);
}

/**
 * @memberOf Values.Gravity
 * @description Sets automatic gravity.
 * @return {GravityQualifier} GravityParam
 */
function auto(...args: (GravityObject | AutoGravity)[]): GravityQualifier {
  return new GravityQualifier(['auto', ...args]);
}


export {
  north,
  west,
  east,
  south,
  advancedEyes,
  advancedFace,
  advancedFaces,
  auto,
  center,
  face,
  northWest,
  faces,
  object,
  ocrText,
  southEast,
  southWest,
  northEast
};

export default {
  north,
  west,
  east,
  south,
  advancedEyes,
  advancedFace,
  advancedFaces,
  auto,
  center,
  face,
  northWest,
  faces,
  object,
  ocrText,
  southEast,
  northEast,
  southWest,
  GravityQualifier
};
