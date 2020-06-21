import Action from "../Action";
import {IAction} from "../../interfaces/IAction";

/**
 * @implements IAction
 */
class Level extends Action implements IAction {
  private qualityLevel: number;

  /**
   * @param qualityLevel
   */
  constructor(qualityLevel: number) {
    super();
    this.qualityLevel = qualityLevel;
  }

  /**
   * @return {string}
   */
  toString(): string {
    return `q_${this.qualityLevel}`;
  }
}

/**
 * @param qualityLevel
 */
function level(qualityLevel: number):Level {
  return new Level(qualityLevel);
}

export default level;
