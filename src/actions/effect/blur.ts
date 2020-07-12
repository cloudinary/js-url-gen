import Action from "../Action";
import {IAction} from "../../interfaces/IAction";

/**
 * @implements IAction
 */
class Blur extends Action implements IAction {
  private blurLevel: number;

  /**
   * @param BlurLevel
   */
  constructor(BlurLevel: number) {
    super();
    this.blurLevel = BlurLevel;
  }

  /**
   * @return {string}
   */
  toString(): string {
    return this.blurLevel ? `e_blur:${this.blurLevel}` : `e_blur`;
  }
}

/**
 * @memberOf Effect
 * @param blurLevel
 */
function blur(blurLevel?: number):Blur {
  return new Blur(blurLevel);
}

export default blur;
