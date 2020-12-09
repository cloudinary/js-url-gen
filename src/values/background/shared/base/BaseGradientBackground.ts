import {BaseCommonBackground} from "./BaseCommonBackground";
import {GradientDirection} from "../../../gradientDirection";
import {GradientDirectionQualifierValue} from "../../../gradientDirection/GradientDirectionQualifierValue";

/**
 * @description Defines the gradient fade effect to use for the background when resizing with padding.
 * @class BaseGradientBackground
 * @memberOf {Values.Background}
 * @augments {Values.Background.BaseCommonBackground}
 */
class BaseGradientBackground extends BaseCommonBackground {
  protected _gradientColors: number;
  protected _gradientDirection: GradientDirectionQualifierValue;
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
  gradientDirection(direction: GradientDirectionQualifierValue): this {
    this._gradientDirection = direction;
    return this;
  }
}

export {BaseGradientBackground};
