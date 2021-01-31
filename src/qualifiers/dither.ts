/**
 * @description Qualifiers for applying an ordered dither filter to the image.
 * @namespace Dither
 * @memberOf Qualifiers
 */


/**
 * @memberOf Qualifiers.Dither
 */
function threshold1x1Nondither(): number {
  return 0;
}

/**
 * @memberOf Qualifiers.Dither
 */
function checkerboard2x1Dither(): number {
  return 1;
}

/**
 * @memberOf Qualifiers.Dither
 */
function ordered2x2Dispersed(): number {
  return 2;
}

/**
 * @memberOf Qualifiers.Dither
 */
function ordered3x3Dispersed(): number {
  return 3;
}

/**
 * @memberOf Qualifiers.Dither
 */
function ordered4x4Dispersed(): number {
  return 4;
}

/**
 * @memberOf Qualifiers.Dither
 */
function ordered8x8Dispersed(): number {
  return 5;
}

/**
 * @memberOf Qualifiers.Dither
 */
function halftone4x4Angled(): number {
  return 6;
}

/**
 * @memberOf Qualifiers.Dither
 */
function halftone6x6Angled(): number {
  return 7;
}

/**
 * @memberOf Qualifiers.Dither
 */
function halftone8x8Angled(): number {
  return 8;
}

/**
 * @memberOf Qualifiers.Dither
 */
function halftone4x4Orthogonal(): number {
  return 9;
}

/**
 * @memberOf Qualifiers.Dither
 */
function halftone6x6Orthogonal(): number {
  return 10;
}

/**
 * @memberOf Qualifiers.Dither
 */
function halftone8x8Orthogonal(): number {
  return 11;
}

/**
 * @memberOf Qualifiers.Dither
 */
function halftone16x16Orthogonal(): number {
  return 12;
}

/**
 * @memberOf Qualifiers.Dither
 */
function circles5x5Black(): number {
  return 13;
}

/**
 * @memberOf Qualifiers.Dither
 */
function circles5x5White(): number {
  return 14;
}

/**
 * @memberOf Qualifiers.Dither
 */
function circles6x6Black(): number {
  return 15;
}

/**
 * @memberOf Qualifiers.Dither
 */
function circles6x6White(): number {
  return 16;
}

/**
 * @memberOf Qualifiers.Dither
 */
function circles7x7Black(): number {
  return 17;
}

/**
 * @memberOf Qualifiers.Dither
 */
function circles7x7White(): number {
  return 18;
}


const Dither = {
  checkerboard2x1Dither,
  circles5x5Black,
  circles5x5White,
  circles6x6Black,
  circles6x6White,
  circles7x7Black,
  circles7x7White,
  halftone4x4Angled,
  halftone4x4Orthogonal,
  halftone6x6Angled,
  halftone6x6Orthogonal,
  halftone8x8Angled,
  halftone8x8Orthogonal,
  halftone16x16Orthogonal,
  ordered2x2Dispersed,
  ordered3x3Dispersed,
  ordered4x4Dispersed,
  ordered8x8Dispersed,
  threshold1x1Nondither
};


export {
  Dither,
  checkerboard2x1Dither,
  circles5x5Black,
  circles5x5White,
  circles6x6Black,
  circles6x6White,
  circles7x7Black,
  circles7x7White,
  halftone4x4Angled,
  halftone4x4Orthogonal,
  halftone6x6Angled,
  halftone6x6Orthogonal,
  halftone8x8Angled,
  halftone8x8Orthogonal,
  halftone16x16Orthogonal,
  ordered2x2Dispersed,
  ordered3x3Dispersed,
  ordered4x4Dispersed,
  ordered8x8Dispersed,
  threshold1x1Nondither
};
