import {BaseGradientBackground} from "../base/BaseGradientBackground";

/**
 * @@doc
 * @description Automatically sets the background color when resizing with padding.
 */
class BackgroundBorderGradientQualifier extends BaseGradientBackground {
  /**
   * @description
   * Stringify the qualifier
   * BackgroundQualifiers don't have a value, but instead override the toString() function
   */
  toString(): string {
    return `
    b_auto:border_gradient
    ${this._constrast ? '_contrast' : ''}
    ${this._gradientColors ? `:${this._gradientColors}` : ''}
    ${this._gradientDirection ? `:${this._gradientDirection}` : ''}
    ${this._palette.length ? `:palette_${this._palette.join('_')}` : ''}
    `.replace(/\s+/g, '');
  }
}

export {BackgroundBorderGradientQualifier};
