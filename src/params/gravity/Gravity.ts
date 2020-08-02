import Param from "../../parameters/Param";
import {AutoGravity, GravityObject} from "../../constants/gravityObjects/GravityObjects";
import ParamValue from "../../parameters/ParamValue";

export class GravityParam extends Param {
  /**
   * @param gravityParamValue, an array containing (GravityObject | AutoGravity | string) or a string;
   */
  constructor(gravityParamValue: (GravityObject | AutoGravity | string)[] | string) {
    super('g', new ParamValue(gravityParamValue));
  }
}


/**
 * @description Creates a GravityParam
 * @return {GravityParam} GravityParam
 */
function south():GravityParam {
  return new GravityParam('south');
}

/**
 * @description Creates a GravityParam
 * @return {GravityParam} GravityParam
 */
function north():GravityParam {
  return new GravityParam('north');
}

/**
 * @description Creates a GravityParam
 * @return {GravityParam} GravityParam
 */
function east():GravityParam {
  return new GravityParam('east');
}

/**
 * @description Creates a GravityParam
 * @return {GravityParam} GravityParam
 */
function west():GravityParam {
  return new GravityParam('west');
}

/**
 * @description Creates a GravityParam
 * @return {GravityParam} GravityParam
 */
function advancedFace(): GravityParam {
  return new GravityParam('adv_face');
}

/**
 * @description Creates a GravityParam
 * @return {GravityParam} GravityParam
 */
function advancedFaces(): GravityParam {
  return new GravityParam('adv_faces');
}

/**
 * @description Creates a GravityParam
 * @return {GravityParam} GravityParam
 */
function advancedEyes(): GravityParam {
  return new GravityParam('adv_eyes');
}

/**
 * @description Creates a GravityParam
 * @return {GravityParam} GravityParam
 */
function northWest(): GravityParam {
  return new GravityParam('north_west');
}

/**
 * @description Creates a GravityParam
 * @return {GravityParam} GravityParam
 */
function northEast(): GravityParam {
  return new GravityParam('north_east');
}

/**
 * @description Creates a GravityParam
 * @return {GravityParam} GravityParam
 */
function southWest(): GravityParam {
  return new GravityParam('south_west');
}

/**
 * @description Creates a GravityParam
 * @return {GravityParam} GravityParam
 */
function southEast(): GravityParam {
  return new GravityParam('south_east');
}

/**
 * @description Creates a GravityParam
 * @return {GravityParam} GravityParam
 */
function ocrText(): GravityParam {
  return new GravityParam('ocr_text');
}

/**
 * @description Creates a GravityParam
 * @return {GravityParam} GravityParam
 */
function face(): GravityParam {
  return new GravityParam('face');
}

/**
 * @description Creates a GravityParam
 * @return {GravityParam} GravityParam
 */
function faces(): GravityParam {
  return new GravityParam('faces');
}

/**
 * @description Creates a GravityParam
 * @return {GravityParam} GravityParam
 */
function center(): GravityParam {
  return new GravityParam('center');
}

/**
 * @description Creates a GravityParam
 * @return {GravityParam} GravityParam
 */
function object(...args: GravityObject[]): GravityParam {
  return new GravityParam(args);
}

/**
 * @description Creates a GravityParam
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
