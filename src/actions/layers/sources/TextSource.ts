import {ISource} from "../ISource";
import {FontStyle, FontWeight} from "../../../params/fonts/Fonts";
import {prepareColor} from "../../../utils/prepareColor";
import ParamValue from "../../../parameters/ParamValue";

/**
 * @private
 */
class TextSource implements ISource {
  private fFamily: string;
  private fSize: number;
  private fWeight: string;
  private textColor: string;
  private innerText: string;
  private fStyle: string;
  constructor(someText:string) {
    this.innerText = someText;
  }

  fontFamily(fontFam:string):this {
    this.fFamily = fontFam;
    return this;
  }

  fontSize(size:number):this {
    this.fSize = size;
    return this;
  }

  fontWeight(weight: keyof typeof FontWeight):this {
    this.fWeight = weight;
    return this;
  }

  fontStyle(style:keyof typeof FontStyle):this {
    this.fStyle = style;
    return this;
  }

  color(textColor: string):this {
    this.textColor = textColor;
    return this;
  }

  getColor():string {
    if (this.textColor) {
      return `co_${prepareColor(this.textColor)}`;
    } else {
      return '';
    }
  }

  getSource():string {
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

  getTransformationString():string {
    return '';
  }
}


export default TextSource;
