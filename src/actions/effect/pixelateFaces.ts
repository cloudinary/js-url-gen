import Action from "../Action";
import {IAction} from "../../interfaces/IAction";
import {prepareEffect} from "./prepareEffect";

/**
 * @implements IAction
 */
class PixelateFaces extends Action implements IAction {

  /**
   * @param pixelateLevel
   */
  constructor(pixelateLevel: number) {
    super();
    const paramEffect = prepareEffect('pixelate_faces', pixelateLevel);
    this.addParam(paramEffect);
  }
}

/**
 * @param pixelateLevel
 */
function pixelateFaces(pixelateLevel?: number):PixelateFaces {
  return new PixelateFaces(pixelateLevel);
}

export default pixelateFaces;
