import Action from "../Action";
import Param from "../../parameters/Param";
import ParamValue from "../../parameters/ParamValue";
import {prepareColor} from "../../utils/prepareColor";

class BorderAction extends Action {
  private borderWidth: number;
  private borderColor: string;
  private borderStyle: string;
  constructor(borderStyle:'solid' | string) {
    super();
    this.borderStyle = borderStyle;
  }

  /**
   * @param {number} borderWidth
   */
  width(borderWidth: number): this {
    this.borderWidth = borderWidth;
    return this;
  }

  /**
   * @param {string} borderColor
   */
  color(borderColor: string): this {
    this.borderColor = prepareColor(borderColor);
    return this;
  }

  protected prepareParam() : void {
    const paramValue = new ParamValue([`${this.borderWidth}px`, this.borderStyle, `${this.borderColor}`]).setDelimiter('_');
    this.addParam(new Param('bo', paramValue));
  }
}


export default BorderAction;

