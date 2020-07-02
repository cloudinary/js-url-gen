import Action from "../Action";
import {IAction} from "../../interfaces/IAction";
import Param from "../../parameters/Param";

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
    this.addParam(new Param('w', cropWidth));
    this.addParam(new Param('h', cropHeight));
    this.addParam(new Param('c', 'crop'));
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
