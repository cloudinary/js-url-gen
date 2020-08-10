import ResizeAction from "./ResizeAction";
import {IResizeAction} from "./IResizeAction";

/**
 * @memberOf Actions.Resize
 * @description
 * Same as the Scale::fit mode but only if the original image is larger than the given limit (width and height),</br>
 * in which case the image is scaled down so that it takes up as much space as possible within a bounding box defined by the given width and height parameters. </br>
 * The original aspect ratio is retained and all of the original image is visible.
 * @param {number} limitFitWidth
 * @param {number} limitFitHeight
 */
function limitFit(limitFitWidth?:number, limitFitHeight?:number) :IResizeAction {
  return new ResizeAction('limit', limitFitWidth, limitFitHeight);
}

export default limitFit;
