import {Action} from "../internal/Action";
import {QualifierValue} from "../internal/qualifier/QualifierValue";
import {Qualifier} from "../internal/qualifier/Qualifier";
import {prepareColor} from "../internal/utils/prepareColor";
import {SystemColors} from "../qualifiers/color";
import RoundCornersAction from "./roundCorners/RoundCornersAction";

/**
 * @summary action
 * @description Adds a solid border around an image or video.
 *
 *  <b>Learn more:</b>
 * {@link https://cloudinary.com/documentation/image_transformations#adding_image_borders | Adding image borders}
 * @memberOf Actions
 * @namespace Border
 */
class Border extends Action {
  private borderWidth: number | string;
  private borderColor: string;
  private borderType: string;
  private _roundCorners: RoundCornersAction;


  /**
   * @summary action
   * @memberOf Actions.Border
   * @description Sets the style of the border.
   * @return {Actions.Border}
   */
  static solid(width: number | string, color: SystemColors): Border {
    return new Border('solid', color, width);
  }

  /**
   * @description Adds a border of the specified type around an image or video.
   * @param {'solid'} borderType The type of border (currently only 'solid' is supported). Use values in {@link Qualifiers.Border|Border Values}.
   * @param {string} color The color of the border.
   * @param {number} borderWidth The width in pixels.
   */
  constructor(borderType: string, color: SystemColors, borderWidth: number | string) {
    super();
    this.borderType = borderType;
    this.borderColor = prepareColor(color);
    this.borderWidth = borderWidth;
  }

  /**
   * @description Sets the width of the border
   * @param {number} borderWidth The width in pixels.
   */
  width(borderWidth: number): this {
    this.borderWidth = borderWidth;
    return this;
  }

  /**
   * @description Sets the color of the border.
   * @param {string} borderColor The color of the border.
   */
  color(borderColor: SystemColors): this {
    this.borderColor = prepareColor(borderColor);
    return this;
  }

  /**
   * @description Rounds the specified corners of an image.
   * @param {RoundCornersAction} roundCorners
   * @return {this}
   */
  roundCorners(roundCorners: RoundCornersAction): this {
    this._roundCorners = roundCorners;
    return this;
  }

  protected prepareQualifiers(): void {
    const qualifierValue = new QualifierValue([`${this.borderWidth}px`, this.borderType, `${this.borderColor}`]).setDelimiter('_');
    this.addQualifier(new Qualifier('bo', qualifierValue));

    if (this._roundCorners) {
      this.addQualifier(this._roundCorners.qualifiers.get('r'));
    }
  }
}

const {solid} = Border;

export {Border, solid};
