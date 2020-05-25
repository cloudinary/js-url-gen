import '../../interfaces/IAction';

/**
 * @implements IAction
 */
class Fill {
  /**
   * @param {number} fillWidth
   * @param {number} fillHeight
   */
  constructor(fillWidth, fillHeight) {
  }
}

/**
 * @param {number} fillWidth
 * @param {number} fillHeight
 * @return {Fill}
 */
function fill(fillWidth, fillHeight) {
  return new Fill(fillWidth, fillHeight)
}

export default fill;
