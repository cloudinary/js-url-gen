/**
 * @description Values for applying an ordered dither filter to the image.
 * @namespace Dither
 * @memberOf Values
 */


/**
 * @@doc
 * @memberOf Values.Dither
 */
function threshold1x1nondither(): number {
  return 0;
}

/**
 * @@doc
 * @memberOf Values.Dither
 */
function checkerboard2x1dither(): number {
  return 1;
}

/**
 * @@doc
 * @memberOf Values.Dither
 */
function ordered2x2dispersed(): number {
  return 2;
}

/**
 * @@doc
 * @memberOf Values.Dither
 */
function ordered3x3dispersed(): number {
  return 3;
}

/**
 * @@doc
 * @memberOf Values.Dither
 */
function ordered4x4dispersed(): number {
  return 4;
}

/**
 * @@doc
 * @memberOf Values.Dither
 */
function ordered8x8dispersed(): number {
  return 5;
}

/**
 * @@doc
 * @memberOf Values.Dither
 */
function halftone4x4angled(): number {
  return 6;
}

/**
 * @@doc
 * @memberOf Values.Dither
 */
function halftone6x6angled(): number {
  return 7;
}

/**
 * @@doc
 * @memberOf Values.Dither
 */
function halftone8x8angled(): number {
  return 8;
}

/**
 * @@doc
 * @memberOf Values.Dither
 */
function halftone4x4orthogonal(): number {
  return 9;
}

/**
 * @@doc
 * @memberOf Values.Dither
 */
function halftone6x6orthogonal(): number {
  return 10;
}

/**
 * @@doc
 * @memberOf Values.Dither
 */
function halftone8x8orthogonal(): number {
  return 11;
}

/**
 * @@doc
 * @memberOf Values.Dither
 */
function halftone16x16orthogonal(): number {
  return 12;
}

/**
 * @@doc
 * @memberOf Values.Dither
 */
function circles5x5black(): number {
  return 13;
}

/**
 * @@doc
 * @memberOf Values.Dither
 */
function circles5x5white(): number {
  return 14;
}

/**
 * @@doc
 * @memberOf Values.Dither
 */
function circles6x6black(): number {
  return 15;
}

/**
 * @@doc
 * @memberOf Values.Dither
 */
function circles6x6white(): number {
  return 16;
}

/**
 * @@doc
 * @memberOf Values.Dither
 */
function circles7x7black(): number {
  return 17;
}

/**
 * @@doc
 * @memberOf Values.Dither
 */
function circles7x7white(): number {
  return 18;
}


const Dither = {
  checkerboard2x1dither,
  circles5x5black,
  circles5x5white,
  circles6x6black,
  circles6x6white,
  circles7x7black,
  circles7x7white,
  halftone4x4angled,
  halftone4x4orthogonal,
  halftone6x6angled,
  halftone6x6orthogonal,
  halftone8x8angled,
  halftone8x8orthogonal,
  halftone16x16orthogonal,
  ordered2x2dispersed,
  ordered3x3dispersed,
  ordered4x4dispersed,
  ordered8x8dispersed,
  threshold1x1nondither
};





export {
  Dither,
  checkerboard2x1dither,
  circles5x5black,
  circles5x5white,
  circles6x6black,
  circles6x6white,
  circles7x7black,
  circles7x7white,
  halftone4x4angled,
  halftone4x4orthogonal,
  halftone6x6angled,
  halftone6x6orthogonal,
  halftone8x8angled,
  halftone8x8orthogonal,
  halftone16x16orthogonal,
  ordered2x2dispersed,
  ordered3x3dispersed,
  ordered4x4dispersed,
  ordered8x8dispersed,
  threshold1x1nondither
};
