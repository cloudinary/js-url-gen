/**
 * @description Values for applying an ordered dither filter to the image.
 * @namespace Dither
 * @memberOf Values
 */


/**
 * @memberOf Values.Dither
 */
function threshold1x1Nondither(): number {
  return 0;
}

/**
 * @memberOf Values.Dither
 */
function checkerboard2x1Dither(): number {
  return 1;
}

/**
 * @memberOf Values.Dither
 */
function ordered2x2Dispersed(): number {
  return 2;
}

/**
 * @memberOf Values.Dither
 */
function ordered3x3Dispersed(): number {
  return 3;
}

/**
 * @memberOf Values.Dither
 */
function ordered4x4Dispersed(): number {
  return 4;
}

/**
 * @memberOf Values.Dither
 */
function ordered8x8Dispersed(): number {
  return 5;
}

/**
 * @memberOf Values.Dither
 */
function halftone4x4Angled(): number {
  return 6;
}

/**
 * @memberOf Values.Dither
 */
function halftone6x6Angled(): number {
  return 7;
}

/**
 * @memberOf Values.Dither
 */
function halftone8x8Angled(): number {
  return 8;
}

/**
 * @memberOf Values.Dither
 */
function halftone4x4Orthogonal(): number {
  return 9;
}

/**
 * @memberOf Values.Dither
 */
function halftone6x6Orthogonal(): number {
  return 10;
}

/**
 * @memberOf Values.Dither
 */
function halftone8x8Orthogonal(): number {
  return 11;
}

/**
 * @memberOf Values.Dither
 */
function halftone16x16Orthogonal(): number {
  return 12;
}

/**
 * @memberOf Values.Dither
 */
function circles5x5Black(): number {
  return 13;
}

/**
 * @memberOf Values.Dither
 */
function circles5x5White(): number {
  return 14;
}

/**
 * @memberOf Values.Dither
 */
function circles6x6Black(): number {
  return 15;
}

/**
 * @memberOf Values.Dither
 */
function circles6x6White(): number {
  return 16;
}

/**
 * @memberOf Values.Dither
 */
function circles7x7Black(): number {
  return 17;
}

/**
 * @memberOf Values.Dither
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
