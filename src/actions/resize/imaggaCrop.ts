import ResizeAction from "./ResizeAction";
import {IResizeAction} from "./IResizeAction";

/**
 * @param {number} fillWidth
 * @param {number} fillHeight
 */
function imaggaCrop(fillWidth?:number, fillHeight?:number) :IResizeAction {
  return new ResizeAction('imagga_crop', fillWidth, fillHeight);
}

export default imaggaCrop;
