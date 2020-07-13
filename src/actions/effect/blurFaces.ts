import Action from "../Action";
import {IAction} from "../../interfaces/IAction";

/**
 * @implements IAction
 */
class BlurFaces extends Action implements IAction {
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
    return this.blurLevel ? `e_blur_faces:${this.blurLevel}` : `e_blur_faces`;
  }
}

/**
 * @memberOf Effect
 * @param blurLevel
 */
function blurFaces(blurLevel?: number):BlurFaces {
  return new BlurFaces(blurLevel);
}

export default blurFaces;
