import {BaseSource} from "../BaseSource";
import {SystemColors} from "../../color";
import {TextStyle} from "../../textStyle";
import {serializeCloudinaryCharacters} from "../../../internal/utils/serializeCloudinaryCharacters";
import {Action} from "../../../internal/Action";
import {Qualifier} from "../../../internal/qualifier/Qualifier";

/**
 * @memberOf Values.Source
 * @extends {Values.Source.BaseSource}
 * @description Defines how to manipulate a text layer
 */
class TextSource extends BaseSource {
  private text: string;
  protected _textStyle: TextStyle
  protected _textColor: SystemColors
  protected _backgroundColor: SystemColors
  protected type = 'text';

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
   * Returns the opening string of the layer,
   * This method is used internally within {@link SDK.LayerAction|LayerAction}
   * @returns {string}
   */
  getOpenSourceString(layerType: 'u' | 'l'): string {
    let layerParam = this.type;

    if (this._textStyle) {
      layerParam += `:${this._textStyle.toString()}`;
    }

    layerParam += `:${serializeCloudinaryCharacters(this.text)}`;

    const tmpAction = new Action();

    tmpAction.addQualifier(new Qualifier('l', layerParam));
    this._textColor && tmpAction.addQualifier(new Qualifier('co', this._textColor));
    this._backgroundColor && tmpAction.addQualifier(new Qualifier('b', this._backgroundColor));

    return tmpAction.toString();
  }
}

export {TextSource};


