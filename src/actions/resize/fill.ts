import '../../interfaces/IAction';

/**
 * @implements IAction
 */
class Fill {
  /**
   * @param {number} fillWidth
   * @param {number} fillHeight
   */
  constructor(fillWidth: number, fillHeight: number) {
  }
}

/**
 * @param {number} fillWidth
 * @param {number} fillHeight
 * @return {Fill}
 */
function fill(fillWidth: number, fillHeight: number) {
  return new Fill(fillWidth, fillHeight);
}

export default fill;
