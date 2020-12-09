/**
 * @@doc
 * @namespace ColorSpace
 * @memberOf Values
 */

/**
 * @@doc
 * @memberOf Values.ColorSpace
 */
function SRGB(): string {
  return 'srgb';
}

/**
 * @@doc
 * @memberOf Values.ColorSpace
 */
function trueColor(): string {
  return 'srgb:truecolor';
}


/**
 * @@doc
 * @memberOf Values.ColorSpace
 */
function tinySRGB(): string {
  return 'tinysrgb';
}


/**
 * @@doc
 * @memberOf Values.ColorSpace
 */
function CMYK(): string {
  return 'cmyk';
}


/**
 * @@doc
 * @memberOf Values.ColorSpace
 */
function noCMYK(): string {
  return 'no_cmyk';
}


/**
 * @@doc
 * @memberOf Values.ColorSpace
 */
function keepCMYK(): string {
  return 'keep_cmyk';
}

const ColorSpace = {
  CMYK,
  keepCMYK,
  noCMYK,
  SRGB,
  tinySRGB,
  trueColor
};

export {
  ColorSpace,
  CMYK,
  keepCMYK,
  noCMYK,
  SRGB,
  tinySRGB,
  trueColor
};

