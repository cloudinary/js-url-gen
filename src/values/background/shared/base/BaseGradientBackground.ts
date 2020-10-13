import {BaseCommonBackground} from "./BaseCommonBackground";

/**
 * @@doc
 * @description Automatically sets the background color when resizing with padding.
 * @class BaseGradientBackground
 * @augments BaseCommonBackground
 */
class BaseGradientBackground extends BaseCommonBackground {
  protected _gradientColors: number;
  protected _gradientDirection: string;
  /**
   *
   * @description Sets the number of predominant colors to use (2 or 4).
   * @param {number} num
   * @return {this}
   */
  gradientColors(num: number): this {
    this._gradientColors = num;
    return this;
  }

  /**
   * @description Sets the direction for a background gradient fade effect.
   * @param {Values.GradientDirection | string} direction Use one of these functions provided by {@link Values.GradientDirection|GradientDirection}
   * @example gradientDirection(GradientDirection.horizontal())
   * @return {this}
   */
  gradientDirection(direction: string): this {
    this._gradientDirection = direction;
    return this;
  }
}

export {BaseGradientBackground};
