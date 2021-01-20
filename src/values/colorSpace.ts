/**
 * @@doc
 * @namespace ColorSpace
 * @memberOf Values
 */

/**
 * @memberOf Values.ColorSpace
 */
function srgb(): string {
  return 'srgb';
}

/**
 * @memberOf Values.ColorSpace
 */
function trueColor(): string {
  return 'srgb:truecolor';
}


/**
 * @memberOf Values.ColorSpace
 */
function tinySrgb(): string {
  return 'tinysrgb';
}


/**
 * @memberOf Values.ColorSpace
 */
function cmyk(): string | number {
  return 'cmyk';
}


/**
 * @memberOf Values.ColorSpace
 */
function noCmyk(): string {
  return 'no_cmyk';
}


/**
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

