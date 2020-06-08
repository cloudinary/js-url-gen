import {IBorderAction} from "./IBorderAction";
import Action from "../Action";

class Solid extends Action implements IBorderAction{
  constructor() {
    super();
  }

  /**
   *
   * @param {number} num
   */
  width(num: number) {
    return this;
  }

  /**
   *
   * @param {string} color
   */
  color(color: string) {
    return this;
  }
}

/**
 * @return {Solid}
 */
function solid() {
  return new Solid();
}

export default solid;
