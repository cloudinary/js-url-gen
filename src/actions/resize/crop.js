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
  constructor(cropWidth, cropHeight) {
  }
}

/**
 * @param {number} cropWidth
 * @param {number} cropHeight
 * @return {Crop}
 */
function crop(cropWidth, cropHeight) {
  return new Crop(cropWidth, cropHeight)
}

export default crop;
