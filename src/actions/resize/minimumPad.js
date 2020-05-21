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
  constructor(padWidth, padHeight) {
  }
}

/**
 * @param {number} padWidth
 * @param {number} padHeight
 * @return {MinimumPad}
 */
function minimumPad(padWidth, padHeight) {
  return new MinimumPad(padWidth, padHeight)
}

export default minimumPad;
