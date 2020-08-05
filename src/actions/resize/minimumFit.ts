import ResizeAction from "./ResizeAction";
import {IResizeAction} from "./IResizeAction";

/**
 * @param {number} fillWidth
 * @param {number} fillHeight
 */
function minimumFit(fillWidth?:number, fillHeight?:number) :IResizeAction {
  return new ResizeAction('mfit', fillWidth, fillHeight);
}

export default minimumFit;
