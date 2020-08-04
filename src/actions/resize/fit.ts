import ResizeAction from "./ResizeAction";
import {IResizeAction} from "./IResizeAction";

/**
 * @param {number} fillWidth
 * @param {number} fillHeight
 */
function fit(fillWidth?:number, fillHeight?:number) :IResizeAction {
  return new ResizeAction('fit', fillWidth, fillHeight);
}

export default fit;
