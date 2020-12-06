import {SystemColors} from "../../values/color/Color";
import {prepareColor} from "../../utils/prepareColor";
import QualifierValue from "../../qualifier/QualifierValue";
import Qualifier from "../../qualifier/Qualifier";
import Action from "../Action";

/**
 * @description Adds a solid border around an image or video.
 *
 *  <b>Learn more:</b>
 * {@link https://cloudinary.com/documentation/image_transformations#adding_image_borders | Adding image borders}
 * @memberOf Actions
 * @namespace Border
 */
class Border extends Action {
  private borderWidth: number;
  private borderColor: string;
  private borderType: string;

  /**
   * @memberOf Actions.Border
   * @description Sets the style of the border.
   * @return {Actions.Border}
   */
  static solid(width: number, color: SystemColors): Border {
    return new Border('solid', color, width);
  }

  /**
   * @description Adds a border of the specified type around an image or video.
   * @param {'solid'} borderType The type of border (currently only 'solid' is supported). Use values in {@link Values.Border|Border Values}.
   * @param {string} color The color of the border.
   * @param {number} borderWidth The width in pixels.
   */
  constructor(borderType: string, color: SystemColors, borderWidth: number) {
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

  protected prepareQualifiers() : void {
    const qualifierValue = new QualifierValue([`${this.borderWidth}px`, this.borderType, `${this.borderColor}`]).setDelimiter('_');
    this.addQualifier(new Qualifier('bo', qualifierValue));
  }
}

const {solid} = Border;

export {Border, solid};
