import ResizeAction from "./ResizeAction";
import {IResizeAction} from "./IResizeAction";

/**
 * @param {number} fillWidth
 * @param {number} fillHeight
 */
function fillPad(fillWidth?:number, fillHeight?:number) :IResizeAction {
  return new ResizeAction('fill_pad', fillWidth, fillHeight);
}

export default fillPad;
