import ResizeAction from "./ResizeAction";
import {resizeActionFactory} from "./IResizeTypes";


/**
 * @memberOf Actions.Resize
 * @type Types.resizeActionFactory
 * @description
 * The image is resized so that it takes up as much space as possible within a bounding box defined by the given width and height parameters.</br>
 * The original aspect ratio is retained and all of the original image is visible.
 * @param {number|string} fitWidth
 * @param {number|string} fitHeight
 */
const fit:resizeActionFactory = function(fitWidth, fitHeight) :ResizeAction {
  return new ResizeAction('fit', fitWidth, fitHeight);
};

export default fit;
