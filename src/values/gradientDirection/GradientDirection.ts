import QualifierValue from "../../qualifier/QualifierValue";

/**
 * @description Defines the direction for a background gradient fade effect.
 * @memberOf Values
 * @namespace GradientDirection
 */
class GradientDirection extends QualifierValue {
  /**
   * @description Blend the colors horizontally.
   * @memberOf Values.GradientDirection
   * @return {string}
   */
  static horizontal(): GradientDirection {
    return new GradientDirection('horizontal');
  }

  /**
   * @description Blend the colors vertically.
   * @memberOf Values.GradientDirection
   * @return {string}
   */
  static vertical(): GradientDirection {
    return new GradientDirection('vertical');
  }

  /**
   * @description Blend the colors diagonally from top-left to bottom-right.
   * @memberOf Values.GradientDirection
   * @return {string}
   */
  static diagonalDesc(): GradientDirection {
    return new GradientDirection('diagonal_desc');
  }

  /**
   * @description Blend the colors diagonally from bottom-left to top-right.
   * @memberOf Values.GradientDirection
   * @return {string}
   */
  static diagonalAsc(): GradientDirection {
    return new GradientDirection('diagonal_asc');
  }

}


const {
  horizontal,
  vertical,
  diagonalDesc,
  diagonalAsc
} = GradientDirection;


export {
  horizontal,
  vertical,
  diagonalDesc,
  diagonalAsc,
  GradientDirection
};
