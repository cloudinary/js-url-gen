import '../../interfaces/IAction';

/**
 * @implements IAction
 */
class Scale {
  /**
   * @param {number} scaleWidth
   * @param {number} scaleHeight
   */
  constructor(scaleWidth: number, scaleHeight:number) {
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
