import ResizeAction from "./ResizeAction";
import {resizeActionFactory} from "./IResizeTypes";

/**
 * @memberOf Actions.Resize
 * @type Types.resizeActionFactory
 * @description
 * Resizes the image to fill the given width and height while retaining the original aspect ratio and with all of the original image visible.
 * @param {number|string} padWidth
 * @param {number|string} padHeight
 */
const pad:resizeActionFactory = function(padWidth, padHeight) :ResizeAction {
  return new ResizeAction('pad', padWidth, padHeight);
};

export default pad;
