import '../../interfaces/IAction';

/**
 * @implements IAction
 */
class BackgroundColor {
  /**
   *
   * @param {string} color
   */
  constructor(color) {
  }
}

/**
 *
 * @param {string} color
 * @return {BackgroundColor}
 */
function bgColor(color) {
  return new BackgroundColor(color);
}

export default bgColor;

