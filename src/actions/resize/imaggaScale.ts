import ResizeAction from "./ResizeAction";
import {IResizeAction} from "./IResizeAction";

/**
 * @param {number} fillWidth
 * @param {number} fillHeight
 */
function imaggaScale(fillWidth?:number, fillHeight?:number) :IResizeAction {
  return new ResizeAction('imagga_scale', fillWidth, fillHeight);
}

export default imaggaScale;
