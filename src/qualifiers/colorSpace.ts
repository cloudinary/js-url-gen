/**
 * @description Contains functions to select the color space mode.
 * @namespace ColorSpace
 * @memberOf Qualifiers
 */

/**
 * @memberOf Qualifiers.ColorSpace
 */
function srgb(): string {
  return 'srgb';
}

/**
 * @memberOf Qualifiers.ColorSpace
 */
function trueColor(): string {
  return 'srgb:truecolor';
}


/**
 * @memberOf Qualifiers.ColorSpace
 */
function tinySrgb(): string {
  return 'tinysrgb';
}


/**
 * @memberOf Qualifiers.ColorSpace
 */
function cmyk(): string | number {
  return 'cmyk';
}


/**
 * @memberOf Qualifiers.ColorSpace
 */
function noCmyk(): string {
  return 'no_cmyk';
}


/**
 * @memberOf Qualifiers.ColorSpace
 */
function keepCmyk(): string {
  return 'keep_cmyk';
}

const ColorSpace = {
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

