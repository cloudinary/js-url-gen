import ResizeAction from "./ResizeAction";
import {IResizeAction} from "./IResizeAction";

/**
 * @memberOf Actions.Resize
 * @description
 * Same as the Pad::pad mode but only if the original image is larger than the given limit (width and height),</br>
 * in which case the image is scaled down to fill the given width and height while retaining the original aspect ratio and with all of the original image visible.
 * @param {number} limitPadWidth
 * @param {number} limitPadHeight
 */
function limitPad(limitPadWidth?:number, limitPadHeight?:number) :IResizeAction {
  return new ResizeAction('lpad', limitPadWidth, limitPadHeight);
}

export default limitPad;
