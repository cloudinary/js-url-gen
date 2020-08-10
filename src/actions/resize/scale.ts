import {ResizeAction} from "./Resize";
import {IResizeAction} from "./IResizeAction";


/**
 * @memberOf Actions.Resize
 * @description
 * Change the size of the image exactly to the given width and height without necessarily retaining the original aspect ratio:<br/>
 * all original image parts are visible but might be stretched or shrunk.
 * @param {number} scaleWidth
 * @param {number} scaleHeight
 */
function scale(scaleWidth?:number, scaleHeight?:number) :IResizeAction {
  return new ResizeAction('scale', scaleWidth, scaleHeight);
}

export default scale;
