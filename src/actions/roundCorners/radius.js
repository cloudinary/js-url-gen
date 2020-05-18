import '../../interfaces/IAction';

/**
 * @implements IAction
 */
class Radius {
  /**
   * @param {number} num
   */
  constructor(num) {
  }
}

/**
 * @param {number} num;
 * @return {Radius}
 */
function radius(num) {
  return new Radius(num)
}

export default radius;
