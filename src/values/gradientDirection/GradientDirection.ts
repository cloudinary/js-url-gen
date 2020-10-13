/**
 * @@docs
 * @description Defines the directions for a background gradient fade effect.
 * @memberOf Values
 * @namespace GradientDirection
 */


/**
 * @description Blend the colors horizontally.
 * @memberOf Values.GradientDirection
 * @return {string}
 */
function horizontal(): string {
  return 'horizontal';
}

/**
 * @description Blend the colors vertically.
 * @memberOf Values.GradientDirection
 * @return {string}
 */
function vertical(): string {
  return 'vertical';
}

/**
 * @description Blend the colors diagonally from top-left to bottom-right.
 * @memberOf Values.GradientDirection
 * @return {string}
 */
function diagonalDesc(): string {
  return 'diagonal_desc';
}

/**
 * @description Blend the colors diagonally from bottom-left to top-right.
 * @memberOf Values.GradientDirection
 * @return {string}
 */
function diagonalAsc(): string {
  return 'diagonal_asc';
}


const GradientDirection = {
  horizontal,
  vertical,
  diagonalDesc,
  diagonalAsc
};

export {
  horizontal,
  vertical,
  diagonalDesc,
  diagonalAsc
};

export default GradientDirection;
