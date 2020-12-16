import {BaseSource} from "../BaseSource";
import {SystemColors} from "../../color";
import {TextStyle} from "../../textStyle";
import {serializeCloudinaryCharacters} from "../../../internal/utils/serializeCloudinaryCharacters";

/**
 * @memberOf Values.Source
 * @extends {Values.Source.BaseSource}
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

  /**
   * @description
   * Get the opening string of the layer,
   * This method is used internally within {@link SDK.LayerAction|LayerAction}
   * @returns {string}
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
