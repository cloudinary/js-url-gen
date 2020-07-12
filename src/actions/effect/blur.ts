import Action from "../Action";
import {IAction} from "../../interfaces/IAction";
import {prepareEffect} from "./prepareEffect";

/**
 * @implements IAction
 */
class Blur extends Action implements IAction {
  /**
   * @param BlurLevel
   */
  constructor(BlurLevel: number) {
    super();
    const paramEffect = prepareEffect('blur', BlurLevel);
    this.addParam(paramEffect);
  }
}

/**
 * @param blurLevel
 */
function blur(blurLevel?: number):Blur {
  return new Blur(blurLevel);
}

export default blur;
