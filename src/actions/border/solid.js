import '../../interfaces/IAction';

/**
 * @implements IAction
 */
class Solid {
  constructor() {
    this.name = 'Crop'
  }

  /**
   *
   * @param {number} num
   */
  width(num) {
    return this;
  }

  /**
   *
   * @param {string} color
   */
  color(color) {
    return this;
  }
}

/**
 * @return {Solid}
 */
function solid() {
  return new Solid()
}

export default solid;
