import ResizeAction from "./ResizeAction";
import {resizeActionFactory} from "./IResizeTypes";


/**
 * @memberOf Actions.Resize
 * @type Types.resizeActionFactory
 * @description
 * Change the size of the image exactly to the given width and height without necessarily retaining the original aspect ratio:<br/>
 * all original image parts are visible but might be stretched or shrunk.
 * @param {number|string} scaleWidth
 * @param {number|string} scaleHeight
 */
const scale:resizeActionFactory = function scale(scaleWidth, scaleHeight) :ResizeAction {
  return new ResizeAction('scale', scaleWidth, scaleHeight);
};

export default scale;
