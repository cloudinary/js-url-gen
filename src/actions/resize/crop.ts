import ResizeAction from "./ResizeAction";
import {IResizeAction} from "./IResizeAction";

/**
 * @param {number} cropWidth
 * @param {number} cropHeight
 */
function crop(cropWidth:number, cropHeight?:number) :IResizeAction {
  return new ResizeAction('crop', cropWidth, cropHeight);
}

export default crop;
