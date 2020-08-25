import ResizeAction from "./ResizeAction";
import {resizeActionFactory} from "./IResizeTypes";

/**
 * @memberOf Actions.Resize
 * @type Types.resizeActionFactory
 * @description
 * Same as the Fill::fill mode, but only if the original image is larger than the specified resolution limits,<br/>
 * in which case the image is scaled down to fill the given width and height without distorting the image,<br/>
 * and then the dimension that exceeds the request is cropped.
 * @param {number|string} limitFillWidth
 * @param {number|string} limitFillHeight
 */
const limitFill:resizeActionFactory = function limitFill(limitFillWidth, limitFillHeight) :ResizeAction {
  return new ResizeAction('lfill', limitFillWidth, limitFillHeight);
};

export default limitFill;
