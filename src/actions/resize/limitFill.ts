import ResizeAction from "./ResizeAction";
import {IResizeAction} from "./IResizeAction";

/**
 * @param {number} fillWidth
 * @param {number} fillHeight
 */
function limitFill(fillWidth?:number, fillHeight?:number) :IResizeAction {
  return new ResizeAction('lfill', fillWidth, fillHeight);
}

export default limitFill;
