import {ResizeAction} from "./Resize";
import {IResizeAction} from "./IResizeAction";

/**
 * @param {number} scaleWidth
 * @param {number} scaleHeight
 */
function scale(scaleWidth:number, scaleHeight?:number) :IResizeAction {
  return new ResizeAction('scale', scaleWidth, scaleHeight);
}

export default scale;
