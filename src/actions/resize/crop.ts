import '../../interfaces/IAction';
import Action from "../Action";

/**
 * @implements IAction
 */
class Crop extends Action implements IAction {
  /**
   *
   * @param {number} cropWidth
   * @param {number} cropHeight
   */
  constructor(cropWidth:number, cropHeight:number) {
    super();
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
