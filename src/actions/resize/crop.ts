import '../../interfaces/IAction';

/**
 * @implements IAction
 */
class Crop {
  /**
   *
   * @param {number} cropWidth
   * @param {number} cropHeight
   */
  constructor(cropWidth:number, cropHeight:number) {
  }
}

/**
 * @param {number} cropWidth
 * @param {number} cropHeight
 * @return {Crop}
 */
function crop(cropWidth:number, cropHeight:number) {
  return new Crop(cropWidth, cropHeight);
}

export default crop;
