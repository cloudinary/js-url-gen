import '../../interfaces/IAction';

/**
 * @implements IAction
 */
class MinimumPad {
  /**
   *
   * @param {number} padWidth
   * @param {number} padHeight
   */
  constructor(padWidth: number, padHeight:number) {
  }
}

/**
 * @param {number} padWidth
 * @param {number} padHeight
 * @return {MinimumPad}
 */
function minimumPad(padWidth:number, padHeight:number) {
  return new MinimumPad(padWidth, padHeight)
}

export default minimumPad;
