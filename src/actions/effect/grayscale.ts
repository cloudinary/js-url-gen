import Action from "../Action";
import {IAction} from "../../interfaces/IAction";
import {prepareEffect} from "./prepareEffect";

/**
 * @implements IAction
 */
class Grayscale extends Action implements IAction {
  constructor(grayscaleLevel?: number) {
    super();
    const paramEffect = prepareEffect('grayscale', grayscaleLevel);
    this.addParam(paramEffect);
  }
}

/**
 * @return {Grayscale}
 */
function grayscale():Grayscale {
  return new Grayscale();
}

export default grayscale;
