import '../../interfaces/IAction';

/**
 * @implements IAction
 */
class Scale {
  /**
   * @param {number} scaleWidth
   * @param {number} scaleHeight
   */
  constructor(scaleWidth, scaleHeight) {
  }
}

/**
 * @param {number} scaleWidth
 * @param {number} scaleHeight
 * @return {Scale}
 */
function scale(scaleWidth, scaleHeight) {
  return new Scale(scaleWidth, scaleHeight)
}

export default scale;
