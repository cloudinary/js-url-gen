import {Action} from "../../internal/Action";
import {SystemColors} from "../../qualifiers/color";

/**
 * @description Removes the edges of the image based on the color of the corner pixels.
 * Specify a color other than the color of the corner pixels using the colorOverride() method
 * @memberOf Actions.Reshape
 * @extends {SDK.Action}
 */
class TrimAction extends Action {
  private _tolerance: number;
  private _color: SystemColors | string;

  /**
   * @param {number} tolerance The tolerance level for color similarity.
   */
  colorSimilarity(tolerance: number): this {
    this._tolerance = tolerance;
    return this;
  }

  /**
   * @param {string | Qualifiers.Color} color Overrides the corner pixels color with the specified color.
   */
  colorOverride(color: SystemColors | string): this {
    this._color = color;
    return this;
  }

  toString(): string {
    // image.reshape(Reshape.trim()->colorSimilarity(50)->colorOverride(Color.YELLOW));
    // e_trim:50:yellow

    return [
      'e_trim',
      this._tolerance,
      this._color
    ].filter((a) => a).join(':');
  }
}


export {TrimAction};
