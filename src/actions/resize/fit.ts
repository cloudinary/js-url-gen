import ResizeAction from "./ResizeAction";
import {IResizeAction} from "./IResizeAction";

/**
 * @memberOf Actions.Resize
 * @description
 * The image is resized so that it takes up as much space as possible within a bounding box defined by the given width and height parameters.</br>
 * The original aspect ratio is retained and all of the original image is visible.
 * @param {number} fitWidth
 * @param {number} fitHeight
 */
function fit(fitWidth?:number, fitHeight?:number) :IResizeAction {
  return new ResizeAction('fit', fitWidth, fitHeight);
}

export default fit;
