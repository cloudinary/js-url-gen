import ResizeAction from "./ResizeAction";
import {IResizeAction} from "./IResizeAction";

/**
 * @param {number} fillWidth
 * @param {number} fillHeight
 */
function limitPad(fillWidth?:number, fillHeight?:number) :IResizeAction {
  return new ResizeAction('lpad', fillWidth, fillHeight);
}

export default limitPad;
