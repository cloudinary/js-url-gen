import '../../interfaces/IAction';

/**
 * @implements IAction
 */
class MinimumPad{
  private padHeight: number;
  private padWidth: number;
  /**
   *
   * @param {number} padWidth
   * @param {number} padHeight
   */
  constructor(padWidth: number, padHeight:number) {
    this.padWidth = padWidth;
    this.padHeight = padHeight;
  }

  /**
   * @return {string}
   */
  toString(): string {
    return `c_mpad,w_${this.padWidth},h_${this.padWidth}`;
  }
}

/**
 * @param {number} padWidth
 * @param {number} padHeight
 * @return {MinimumPad}
 */
function minimumPad(padWidth:number, padHeight:number) {
  return new MinimumPad(padWidth, padHeight);
}

export default minimumPad;
