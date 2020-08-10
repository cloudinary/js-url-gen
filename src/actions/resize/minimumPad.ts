import ResizeAction from "./ResizeAction";
import {IResizeAction} from "./IResizeAction";


/**
 * @memberOf Actions.Resize
 * @description
 * Same as the Pad::pad mode but only if the original image is larger than the given limit (width and height),</br>
 * in which case the image is scaled down to fill the given width and height while retaining the original aspect ratio and with all of the original image visible.
 * @param {number} minPadWidth
 * @param {number} minPadHeight
 */
function minimumPad(minPadWidth:number, minPadHeight?:number) :IResizeAction {
  return new ResizeAction('mpad', minPadWidth, minPadHeight);
}

export default minimumPad;
