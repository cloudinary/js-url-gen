import ResizeAction from "./ResizeAction";
import {resizeActionFactory} from "./IResizeTypes";


/**
 * @memberOf Actions.Resize
 * @type Types.resizeActionFactory
 * @description
 * Same as the Pad::pad mode but only if the original image is larger than the given limit (width and height),</br>
 * in which case the image is scaled down to fill the given width and height while retaining the original aspect ratio and with all of the original image visible.
 * @param {number|string} minPadWidth
 * @param {number|string} minPadHeight
 */
const minimumPad:resizeActionFactory = function minimumPad(minPadWidth, minPadHeight) :ResizeAction {
  return new ResizeAction('mpad', minPadWidth, minPadHeight);
};

export default minimumPad;
