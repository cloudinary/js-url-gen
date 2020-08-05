import ResizeAction from "./ResizeAction";
import {IResizeAction} from "./IResizeAction";

/**
 * @param {number} fillWidth
 * @param {number} fillHeight
 */
function thumbnail(fillWidth?:number, fillHeight?:number) :IResizeAction {
  return new ResizeAction('thumb', fillWidth, fillHeight);
}

export default thumbnail;
