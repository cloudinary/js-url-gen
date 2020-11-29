import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";
import QualifierValue from "../../qualifier/QualifierValue";
import {prepareColor} from "../../utils/prepareColor";
import {SystemColors} from "../../values/color/Color";

/**
 * @description Adds a solid border around an image or video.
 * @class BorderAction
 * @augments {Action}
 */
class BorderAction extends Action {
  private borderWidth: number;
  private borderColor: string;
  private borderType: string;

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

export default BorderAction;
