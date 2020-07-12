import Action from "../Action";
import {IAction} from "../../interfaces/IAction";
import {prepareEffect} from "./prepareEffect";

/**
 * @implements IAction
 */
class Sepia extends Action implements IAction {
  constructor(sepiaLevel?: number) {
    super();
    const paramEffect = prepareEffect('sepia', sepiaLevel);
    this.addParam(paramEffect);
  }
}

/**
 * @return {Sepia}
 */
function sepia():Sepia {
  return new Sepia();
}

export default sepia;
