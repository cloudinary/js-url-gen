import ResizeAction from "./ResizeAction";
import {IResizeAction} from "./IResizeAction";

/**
 * @param {number} fillWidth
 * @param {number} fillHeight
 */
function limitFit(fillWidth?:number, fillHeight?:number) :IResizeAction {
  return new ResizeAction('limit', fillWidth, fillHeight);
}

export default limitFit;
