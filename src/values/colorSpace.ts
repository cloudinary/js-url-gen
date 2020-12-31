/**
 * @@doc
 * @namespace ColorSpace
 * @memberOf Values
 */

/**
 * @@doc
 * @memberOf Values.ColorSpace
 */
function srgb(): string {
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
function tinySrgb(): string {
  return 'tinysrgb';
}


/**
 * @@doc
 * @memberOf Values.ColorSpace
 */
function cmyk(): string {
  return 'cmyk';
}


/**
 * @@doc
 * @memberOf Values.ColorSpace
 */
function noCmyk(): string {
  return 'no_cmyk';
}


/**
 * @@doc
 * @memberOf Values.ColorSpace
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

