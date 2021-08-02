import {BaseCommonBackground} from "./BaseCommonBackground";
import {GradientDirectionQualifierValue} from "../../../gradientDirection/GradientDirectionQualifierValue";
import {GradientDirectionType} from "../../../../types/types";

/**
 * @description Defines the gradient fade effect to use for the background when resizing with padding.
 * @memberOf Qualifiers.Background
 * @extends {Qualifiers.Background.BaseCommonBackground}
 */
class BaseGradientBackground extends BaseCommonBackground {
  protected _gradientColors: number;
  protected _gradientDirection: GradientDirectionType|GradientDirectionQualifierValue;
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
   * @param {Qualifiers.GradientDirection | GradientDirectionType | string} direction Use one of these functions
   * provided by {@link Qualifiers.GradientDirection|GradientDirection}
   * @return {this}
   */
  gradientDirection(direction: GradientDirectionType | GradientDirectionQualifierValue): this {
    this._gradientDirection = direction;
    return this;
  }
}

export {BaseGradientBackground};
