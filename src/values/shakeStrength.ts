/**
 * @description Contains functions to select the maximum number of pixels in the horizontal and vertical direction that are addressed.
 * @memberOf Values
 * @namespace ShakeStrength
 */

/**
 * @memberOf Values.ShakeStrength
 */
function pixels16(): 16 {
  return 16;
}

/**
 * @memberOf Values.ShakeStrength
 */
function pixels32(): 32 {
  return 32;
}

/**
 * @memberOf Values.ShakeStrength
 */
function pixels48(): 48 {
  return 48;
}

/**
 * @memberOf Values.ShakeStrength
 */
function pixels64(): 64 {
  return 64;
}

const ShakeStrength = {
  pixels16,
  pixels32,
  pixels48,
  pixels64
};

export {
  pixels16,
  pixels32,
  pixels48,
  pixels64,
  ShakeStrength
};
