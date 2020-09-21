/**
 * @description Defines the focal gravity for certain methods of cropping.
 * @namespace Gravity
 * @memberOf Values
 */

import Qualifier from "../../qualifier/Qualifier";
import {AutoGravity, GravityObject} from "../gravityObjects/GravityObjects";
import QualifierValue from "../../qualifier/QualifierValue";


export class GravityParam extends Qualifier {
  /**
   * @param gravityParamValue, an array containing (GravityObject | AutoGravity | string) or a string;
   */
  constructor(gravityParamValue: (GravityObject | AutoGravity | string)[] | string) {
    super('g', new QualifierValue(gravityParamValue));
  }
}


/**
 * @memberOf Values.Gravity
 * @description South center part (bottom center).
 * @return {GravityParam} GravityParam
 */
function south():GravityParam {
  return new GravityParam('south');
}

/**
 * @memberOf Values.Gravity
 * @description North center part (top center).
 * @return {GravityParam} GravityParam
 */
function north():GravityParam {
  return new GravityParam('north');
}

/**
 * @memberOf Values.Gravity
 * @description Middle east part (right).
 * @return {GravityParam} GravityParam
 */
function east():GravityParam {
  return new GravityParam('east');
}

/**
 * @memberOf Values.Gravity
 * @description Middle west part (left).
 * @return {GravityParam} GravityParam
 */
function west():GravityParam {
  return new GravityParam('west');
}

/**
 * @memberOf Values.Gravity
 * @description Detects the largest face in an image with the Advanced Facial Attribute Detection add-on and makes it the focus of the transformation.
 * @return {GravityParam} GravityParam
 */
function advancedFace(): GravityParam {
  return new GravityParam('adv_face');
}

/**
 * @memberOf Values.Gravity
 * @description Detects all faces in an image with the Advanced Facial Attribute Detection add-on and makes them the focus of the transformation.
 * @return {GravityParam} GravityParam
 */
function advancedFaces(): GravityParam {
  return new GravityParam('adv_faces');
}

/**
 * @memberOf Values.Gravity
 * @description Detects all eyes in an image with the Advanced Facial Attribute Detection add-on and makes them the focus of the transformation.
 * @return {GravityParam} GravityParam
 */
function advancedEyes(): GravityParam {
  return new GravityParam('adv_eyes');
}

/**
 * @memberOf Values.Gravity
 * @description North west corner (top left).
 * @return {GravityParam} GravityParam
 */
function northWest(): GravityParam {
  return new GravityParam('north_west');
}

/**
 * @memberOf Values.Gravity
 * @description North east corner (top right).
 * @return {GravityParam} GravityParam
 */
function northEast(): GravityParam {
  return new GravityParam('north_east');
}

/**
 * @memberOf Values.Gravity
 * @description South west corner (bottom left).
 * @return {GravityParam} GravityParam
 */
function southWest(): GravityParam {
  return new GravityParam('south_west');
}

/**
 * @memberOf Values.Gravity
 * @description South east corner (bottom right).
 * @return {GravityParam} GravityParam
 */
function southEast(): GravityParam {
  return new GravityParam('south_east');
}

/**
 * @memberOf Values.Gravity
 * @description
 * Detects all text elements in an image using the OCR Text Detection and Extraction add-on</br>
 * and uses the detected bounding box coordinates as the focus of the transformation.
 * @return {GravityParam} GravityParam
 */
function ocrText(): GravityParam {
  return new GravityParam('ocr_text');
}

/**
 * @memberOf Values.Gravity
 * @description Detects the largest face in the asset and makes it the focus of the transformation.
 * @return {GravityParam} GravityParam
 */
function face(): GravityParam {
  return new GravityParam('face');
}

/**
 * @memberOf Values.Gravity
 * @description Detects all the faces in the asset and makes them the focus of the transformation.
 * @return {GravityParam} GravityParam
 */
function faces(): GravityParam {
  return new GravityParam('faces');
}

/**
 * @memberOf Values.Gravity
 * @description The center of the image.
 * @return {GravityParam} GravityParam
 */
function center(): GravityParam {
  return new GravityParam('center');
}

/**
 * @memberOf Values.Gravity
 * @description
 * TODO : (This is not accurate in JS)</br>
 * Creates a new instance of the ObjectGravity.
 * @return {GravityParam} GravityParam
 */
function object(...args: GravityObject[]): GravityParam {
  return new GravityParam(args);
}

/**
 * @memberOf Values.Gravity
 * @description Sets automatic gravity.
 * @return {GravityParam} GravityParam
 */
function auto(...args: (GravityObject | AutoGravity)[]): GravityParam {
  return new GravityParam(['auto', ...args]);
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
  GravityParam
};
