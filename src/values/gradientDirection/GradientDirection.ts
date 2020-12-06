import {GradientDirectionQualifierValue} from "./GradientDirectionQualifierValue";

/**
 * @description Defines the direction for a background gradient fade effect.
 * @memberOf Values
 * @namespace GradientDirection
 */

/**
 * @description Blend the colors horizontally.
 * @memberOf Values.GradientDirection
 * @return {Values.GradientDirection.GradientDirectionQualifierValue}
 */
function horizontal(): GradientDirectionQualifierValue {
  return new GradientDirectionQualifierValue('horizontal');
}

/**
 * @description Blend the colors vertically.
 * @memberOf Values.GradientDirection
 * @return {Values.GradientDirection.GradientDirectionQualifierValue}
 */
function vertical(): GradientDirectionQualifierValue {
  return new GradientDirectionQualifierValue('vertical');
}

/**
 * @description Blend the colors diagonally from top-left to bottom-right.
 * @memberOf Values.GradientDirection
 * @return {Values.GradientDirection.GradientDirectionQualifierValue}
 */
function diagonalDesc(): GradientDirectionQualifierValue {
  return new GradientDirectionQualifierValue('diagonal_desc');
}

/**
 * @description Blend the colors diagonally from bottom-left to top-right.
 * @memberOf Values.GradientDirection
 * @return {Values.GradientDirection.GradientDirectionQualifierValue}
 */
function diagonalAsc(): GradientDirectionQualifierValue {
  return new GradientDirectionQualifierValue('diagonal_asc');
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
  diagonalAsc,
  GradientDirection
};
