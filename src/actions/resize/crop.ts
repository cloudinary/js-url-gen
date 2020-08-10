import ResizeAction from "./ResizeAction";
import {IResizeAction} from "./IResizeAction";

/**
 * @memberOf Actions.Resize
 * @description Extracts a region of the given width and height out of the original image.
 * @param {number} cropWidth
 * @param {number} cropHeight
 */
function crop(cropWidth?:number, cropHeight?:number) :IResizeAction {
  return new ResizeAction('crop', cropWidth, cropHeight);
}

export default crop;
