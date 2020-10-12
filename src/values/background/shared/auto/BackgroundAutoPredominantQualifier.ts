import {BaseCommonBackground} from "../base/BaseCommonBackground";

class BackgroundAutoPredominantQualifier extends BaseCommonBackground {
  /**
   * @description
   * Stringify the qualifier
   * BackgroundQualifiers don't have a value, but instead override the toString() function
   */
  toString(): string {
    return `
    b_auto:predominant
    ${this._constrast ? '_contrast' : ''}
    ${this._palette.length ? `:palette_${this._palette.join('_')}` : ''}
    `.replace(/\s+/g, '');
  }
}

export {BackgroundAutoPredominantQualifier};
