import {IBorderAction} from "./IBorderAction";

class Solid implements IBorderAction {
  constructor() {

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
