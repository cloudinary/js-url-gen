import '../../interfaces/IAction';

/**
 * @implements IAction
 */
class Crop {
  private cropWidth: number;
  private cropHeight: number;
  /**
   *
   * @param {number} cropWidth
   * @param {number} cropHeight
   */
  constructor(cropWidth:number, cropHeight:number) {
    this.cropWidth = cropWidth;
    this.cropHeight = cropHeight;
  }

  /**
   * @return {string}
   */
  toString(): string {
    return `c_crop,w_${this.cropWidth},h_${this.cropHeight}`;
  }
}

/**
 * @param {number} cropWidth
 * @param {number} cropHeight
 * @return {Crop}
 */
function crop(cropWidth:number, cropHeight:number):Crop {
  return new Crop(cropWidth, cropHeight);
}

export default crop;
