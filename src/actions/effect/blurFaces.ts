import Action from "../Action";
import {IAction} from "../../interfaces/IAction";
import {prepareEffect} from "./prepareEffect";

/**
 * @implements IAction
 */
class BlurFaces extends Action implements IAction {
  /**
   * @param BlurLevel
   */
  constructor(BlurLevel: number) {
    super();
    const paramEffect = prepareEffect('blur_faces', BlurLevel);
    this.addParam(paramEffect);
  }
}

/**
 * @param blurLevel
 */
function blurFaces(blurLevel?: number):BlurFaces {
  return new BlurFaces(blurLevel);
}

export default blurFaces;
