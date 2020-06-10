import '../../interfaces/IAction';

/**
 * @implements IAction
 */
class Scale {
  private scaleWidth: number;
  private scaleHeight: number;

  /**
   * @param {number} scaleWidth
   * @param {number} scaleHeight
   */
  constructor(scaleWidth: number, scaleHeight:number) {
    this.scaleWidth = scaleWidth;
    this.scaleHeight = scaleHeight;
  }

  /**
   * @return {string}
   */
  toString(): string {
    return `c_scale,w_${this.scaleWidth},h_${this.scaleHeight}`;
  }
}

/**
 * @param {number} scaleWidth
 * @param {number} scaleHeight
 * @return {Scale}
 */
function scale(scaleWidth:number, scaleHeight:number): Scale {
  return new Scale(scaleWidth, scaleHeight);
}

export default scale;
