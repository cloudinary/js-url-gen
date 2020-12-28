import {Action} from "../../internal/Action";

/**
 * @description Skews the image according to the two specified values in degrees.
 * @memberOf Actions.Reshape
 * @extends {SDK.Action}
 */
class ShearAction extends Action {
  private _x: number;
  private _y: number;

  /**
   * @param {number} x Skews the image according to the two specified values in degrees. (X and Y)
   */
  skewX(x: number): this {
    this._x = x;
    return this;
  }

  /**
   * @param {number} y Skews the image according to the two specified values in degrees. (X and Y)
   */
  skewY(y: number): this {
    this._y = y;
    return this;
  }

  toString(): string {
    return [
      'e_shear',
      this._x,
      this._y
    ].filter((a) => a).join(':')
  }
}


export {ShearAction};
