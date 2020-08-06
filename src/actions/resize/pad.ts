import ResizeAction from "./ResizeAction";
import {IResizeAction} from "./IResizeAction";

/**
 * @memberOf Actions.Resize
 * @description
 * Resizes the image to fill the given width and height while retaining the original aspect ratio and with all of the original image visible.
 * @param {number} padWidth
 * @param {number} padHeight
 */
function pad(padWidth?:number, padHeight?:number) :IResizeAction {
  return new ResizeAction('pad', padWidth, padHeight);
}

export default pad;
