import {BaseSource} from "../BaseSource";
import {SystemColors} from "../../color";
import {ImageTransformation} from "../../../transformation/ImageTransformation";
import {TextStyle} from "../../textStyle";
import {serializeCloudinaryCharacters} from "../../../internal/utils/serializeCloudinaryCharacters";

/**
 * @description Defines how to manipulate a text layer
 */
class TextSource extends BaseSource {
  private text: string;
  private _textStyle: TextStyle
  private _textColor: SystemColors
  private _backgroundColor: SystemColors

  constructor(text: string, textStyle: TextStyle) {
    super();
    this.text = text;
    this._textStyle = textStyle;
  }

  transformation(t: ImageTransformation): this {
    this._transformation = t;
    return this;
  }

  textStyle(tStyle:TextStyle): this {
    this._textStyle = tStyle;
    return this;
  }

  textColor(color:SystemColors): this {
    this._textColor = color;
    return this;
  }

  backgroundColor(bgColor:SystemColors): this {
    this._backgroundColor = bgColor;
    return this;
  }

  // private fFamily: string;
  // private fSize: number;
  // private fWeight: string;
  // private textColor: string;
  // private innerText: string;
  // private fStyle: string;
  //

  //
  // /**
  //  *
  //  * @param {string} fontFam
  //  * @return {this}
  //  */
  // fontFamily(fontFam: string): this {
  //   this.fFamily = fontFam;
  //   return this;
  // }
  //
  // /**
  //  *
  //  * @param {number} size
  //  * @return {this}
  //  */
  // fontSize(size: number): this {
  //   this.fSize = size;
  //   return this;
  // }
  //
  // /**
  //  *
  //  * @param {Values.FontWeight} weight
  //  * @return {this}
  //  */
  // fontWeight(weight: string): this {
  //   this.fWeight = weight;
  //   return this;
  // }
  //
  // /**
  //  *
  //  * @param {Values.FontWeight} style
  //  * @return {this}
  //  */
  // fontStyle(style: string): this {
  //   this.fStyle = style;
  //   return this;
  // }
  //
  // /**
  //  *
  //  * @param {string} textColor
  //  * @return {this}
  //  */
  // color(textColor: string): this {
  //   this.textColor = textColor;
  //   return this;
  // }
  //
  // /**
  //  * @return {string}
  //  */
  // getColor(): string {
  //   if (this.textColor) {
  //     return `co_${prepareColor(this.textColor)}`;
  //   } else {
  //     return '';
  //   }
  // }
  //


  /**
   * @return {string}
   */
  getOpenSourceString(): string {
    let str = 'text';

    if (this._textStyle) {
      str += `:${this._textStyle.toString()}`;
    }

    str += `:${serializeCloudinaryCharacters(this.text)}`;

    if (this._textColor) {
      str += `,${this._textColor}`;
    }

    return str;
  }
}


export {TextSource};
