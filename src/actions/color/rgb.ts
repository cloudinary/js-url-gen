import Action from "../Action";
import {IAction} from "../../interfaces/IAction";
import Param from "../../parameters/Param";

/**
 * @implements IAction
 */
class Rgb extends Action implements IAction {
  /**
   *
   * @param color
   */

  constructor(color:string) {
    super();
    this.addParam(new Param('co', color));
  }
}

/**
 * @return {Rgb}
 * @param color
 */
function rgb(color: string):Rgb {
  return new Rgb(prepareRgb(color));
}

/**
 * @param value
 */
function prepareRgb(value: string){
  return value.match(/^#[0-9A-F]{6}$/i) ? value.substr(1) : value;
}

export default rgb;
