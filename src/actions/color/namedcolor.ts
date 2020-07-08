import Action from "../Action";
import {IAction} from "../../interfaces/IAction";
import Param from "../../parameters/Param";

/**
 * @implements IAction
 */
export class NamedColor extends Action implements IAction {
  /**
   *
   * @param namedColor
   */
  constructor(namedColor: string) {
    super();
    this.addParam(new Param('co', namedColor));
  }
}

/**
 * @return {NamedColor}
 * @param namedColor
 */
function namedColor(namedColor: string):NamedColor {
  return new NamedColor(namedColor);
}

export default namedColor;
