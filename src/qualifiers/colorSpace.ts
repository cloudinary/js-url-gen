/**
 * @description Contains functions to select the color space mode.
 * @namespace ColorSpace
 * @memberOf Qualifiers
 * @see Visit {@link Actions.Delivery.colorSpace|Delivery Color Space} for an example
 */

import {ColorSpaceType} from "../types/types.js";

/**
 * @summary qualifier
 * @memberOf Qualifiers.ColorSpace
 */
function srgb(): ColorSpaceType {
  return 'srgb';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.ColorSpace
 */
function trueColor(): ColorSpaceType {
  return 'srgb:truecolor';
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.ColorSpace
 */
function tinySrgb(): ColorSpaceType {
  return 'tinysrgb';
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.ColorSpace
 */
function cmyk(): ColorSpaceType {
  return 'cmyk';
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.ColorSpace
 */
function noCmyk(): ColorSpaceType {
  return 'no_cmyk';
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.ColorSpace
 */
function keepCmyk(): ColorSpaceType {
  return 'keep_cmyk';
}

const ColorSpace: Record<string, ()=>ColorSpaceType> = {
  cmyk,
  keepCmyk,
  noCmyk,
  srgb,
  tinySrgb,
  trueColor
};

export {
  ColorSpace,
  cmyk,
  keepCmyk,
  noCmyk,
  srgb,
  tinySrgb,
  trueColor
};

