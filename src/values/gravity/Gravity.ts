/**
 * @description Defines the focal gravity for certain methods of cropping.
 * @namespace Gravity
 * @memberOf Values
 */

import Qualifier from "../../qualifier/Qualifier";
import QualifierValue from "../../qualifier/QualifierValue";
import {GravityObject} from "../gravityObjects/GravityObject";
import {AutoGravity} from "../gravityObjects/AutoGravity";


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
  advancedEyes,
  advancedFace,
  advancedFaces,
  auto,
  face,
  faces,
  object,
  ocrText
};

