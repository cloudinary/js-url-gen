import Action from "../Action";
import {IAction} from "../../interfaces/IAction";

/**
 * @implements IAction
 */
class PixelateFaces extends Action implements IAction {
  private pixelateLevel: number;

  /**
   * @param pixelateLevel
   */
  constructor(pixelateLevel: number) {
    super();
    this.pixelateLevel = pixelateLevel;
  }

  /**
   * @return {string}
   */
  toString(): string {
    return this.pixelateLevel ? `e_pixelate_faces:${this.pixelateLevel}` : `e_pixelate_faces`;
  }
}

/**
 * @param pixelateLevel
 */
function pixelateFaces(pixelateLevel?: number):PixelateFaces {
  return new PixelateFaces(pixelateLevel);
}

export default pixelateFaces;
