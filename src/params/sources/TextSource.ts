import {ISource} from "./ISource";
import {FontStyle, FontWeight} from "../fonts/Fonts";
import {prepareColor} from "../../utils/prepareColor";
import ParamValue from "../../parameters/ParamValue";

/**
 * @implements {ISource}
 * @memberOf Params.Sources
 */
class TextSource implements ISource {
  private fFamily: string;
  private fSize: number;
  private fWeight: string;
  private textColor: string;
  private innerText: string;
  private fStyle: string;

  constructor(text: string) {
    this.innerText = text;
  }

  /**
   *
   * @param {string} fontFam
   * @returns {this}
   */
  fontFamily(fontFam: string): this {
    this.fFamily = fontFam;
    return this;
  }

  /**
   *
   * @param {number} size
   * @returns {this}
   */
  fontSize(size: number): this {
    this.fSize = size;
    return this;
  }

  /**
   *
   * @param {FontWeight} weight
   * @returns {this}
   */
  fontWeight(weight: keyof typeof FontWeight): this {
    this.fWeight = weight;
    return this;
  }

  /**
   *
   * @param {FontStyle} style
   * @returns {this}
   */
  fontStyle(style: keyof typeof FontStyle): this {
    this.fStyle = style;
    return this;
  }

  /**
   *
   * @param {string} textColor
   * @returns {this}
   */
  color(textColor: string): this {
    this.textColor = textColor;
    return this;
  }

  /**
   * @returns {string}
   */
  getColor(): string {
    if (this.textColor) {
      return `co_${prepareColor(this.textColor)}`;
    } else {
      return '';
    }
  }

  /**
   * @returns {string}
   */
  getSource(): string {
    const fontValue = new ParamValue([this.fFamily, this.fSize, this.fWeight, this.fStyle])
      .setDelimiter('_')
      .toString();

    const fontAndText = new ParamValue(['text', fontValue, this.innerText])
      .setDelimiter(':')
      .toString();

    const final = new ParamValue([fontAndText, this.getColor()])
      .setDelimiter(',')
      .toString();
    return `${final}`;
  }

  getTransformationString(): string {
    return '';
  }
}


export default TextSource;
