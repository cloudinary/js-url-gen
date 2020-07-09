import {ResizeAction} from "./Resize";
import {IResizeAction} from "./IResizeAction";

/**
 * @param {number} fillWidth
 * @param {number} fillHeight
 */
function fill(fillWidth:number, fillHeight?:number) :IResizeAction {
  return new ResizeAction('fill', fillWidth, fillHeight);
}

export default fill;
