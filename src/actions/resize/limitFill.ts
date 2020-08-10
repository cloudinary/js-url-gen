import ResizeAction from "./ResizeAction";
import {IResizeAction} from "./IResizeAction";

/**
 * @memberOf Actions.Resize
 * @description
 * Same as the Fill::fill mode, but only if the original image is larger than the specified resolution limits,<br/>
 * in which case the image is scaled down to fill the given width and height without distorting the image,<br/>
 * and then the dimension that exceeds the request is cropped.
 * @param {number} limitFillWidth
 * @param {number} limitFillHeight
 */
function limitFill(limitFillWidth?:number, limitFillHeight?:number) :IResizeAction {
  return new ResizeAction('lfill', limitFillWidth, limitFillHeight);
}

export default limitFill;
