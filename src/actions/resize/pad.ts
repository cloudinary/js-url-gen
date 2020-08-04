import ResizeAction from "./ResizeAction";
import {IResizeAction} from "./IResizeAction";

/**
 * @param {number} fillWidth
 * @param {number} fillHeight
 */
function pad(fillWidth?:number, fillHeight?:number) :IResizeAction {
  return new ResizeAction('pad', fillWidth, fillHeight);
}

export default pad;
