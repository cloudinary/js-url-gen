import {IBorderAction} from "./IBorderAction";
import Action from "../Action";
import Param from "../../parameters/Param";
import ParamValue from "../../parameters/ParamValue";
import {prepareColor} from "../../utils/prepareColor";

/**
 * @memberOf Actions.Border
 */
class Solid extends Action implements IBorderAction{
  private borderWidth: number;
  private borderColor: string;
  constructor() {
    super();
  }

  /**
   *
   * @param borderWidth
   */
  width(borderWidth: number) {
    this.borderWidth = borderWidth;
    return this;
  }

  /**
   * @param borderColor
   */
  color(borderColor: string) {
    this.borderColor = prepareColor(borderColor);
    return this;
  }

  protected prepareParam() : void {
    const paramValue = new ParamValue([`${this.borderWidth}px`, 'solid', `${this.borderColor}`]).setDelimiter('_');
    this.addParam(new Param('bo', paramValue));
  }
}


/**
 * @memberOf Actions.Border
 * @description Adds a solid border around an image or video.
 * @return {@link Solid} (SolidBorder instance)
 */
function solid(): Solid {
  return new Solid();
}

export default solid;
