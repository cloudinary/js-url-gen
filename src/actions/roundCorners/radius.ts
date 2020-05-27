import '../../interfaces/IAction';

/**
 * @implements IAction
 */
class Radius {
  /**
   * @param {number} num
   */
  constructor(num: number) {
  }
}

/**
 * @param {number} num;
 * @return {Radius}
 */
function radius(num:number ) {
  return new Radius(num)
}

export default radius;
