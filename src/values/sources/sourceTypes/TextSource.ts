import {ISource} from "../ISource";
import {prepareColor} from "../../../internal/utils/prepareColor";
import {QualifierValue} from "../../../internal/qualifier/QualifierValue";
import {serializeCloudinaryCharacters} from "../../../internal/utils/serializeCloudinaryCharacters";

/**
 * @description Defines how to manipulate a text layer
 * @class TextSource
 * @implements {ISource}
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
   * @return {this}
   */
  fontFamily(fontFam: string): this {
    this.fFamily = fontFam;
    return this;
  }

  /**
   *
   * @param {number} size
   * @return {this}
   */
  fontSize(size: number): this {
    this.fSize = size;
    return this;
  }

  /**
   *
   * @param {Values.FontWeight} weight
   * @return {this}
   */
  fontWeight(weight: string): this {
    this.fWeight = weight;
    return this;
  }

  /**
   *
   * @param {Values.FontWeight} style
   * @return {this}
   */
  fontStyle(style: string): this {
    this.fStyle = style;
    return this;
  }

  /**
   *
   * @param {string} textColor
   * @return {this}
   */
  color(textColor: string): this {
    this.textColor = textColor;
    return this;
  }

  /**
   * @return {string}
   */
  getColor(): string {
    if (this.textColor) {
      return `co_${prepareColor(this.textColor)}`;
    } else {
      return '';
    }
  }

  /**
   * @return {string}
   */
  getSource(): string {
    const fontValue = new QualifierValue([serializeCloudinaryCharacters(this.fFamily), this.fSize, this.fWeight, this.fStyle])
      .setDelimiter('_')
      .toString();

    const fontAndText = new QualifierValue(['text', fontValue, serializeCloudinaryCharacters(this.innerText)])
      .setDelimiter(':')
      .toString();

    const final = new QualifierValue([fontAndText, this.getColor()])
      .setDelimiter(',')
      .toString();
    return `${final}`;
  }

  getTransformationString(): string {
    return '';
  }
}


export {TextSource};
