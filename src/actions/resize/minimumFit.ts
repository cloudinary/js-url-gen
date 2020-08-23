import ResizeAction from "./ResizeAction";
import {resizeActionFactory} from "./IResizeTypes";

/**
 * @memberOf Actions.Resize
 * @type Types.resizeActionFactory
 * @description
 * Same as the Scale::fit mode but only if the original image is smaller than the given minimum (width and height),</br>
 * in which case the image is scaled up so that it takes up as much space as possible within a bounding box defined by the given width and height parameters.</br>
 * The original aspect ratio is retained and all of the original image is visible.
 * @param {number|string} minFitWidth
 * @param {number|string} minFitHeight
 */
const minimumFit:resizeActionFactory = function(minFitWidth, minFitHeight) :ResizeAction {
  return new ResizeAction('mfit', minFitWidth, minFitHeight);
};

export default minimumFit;
