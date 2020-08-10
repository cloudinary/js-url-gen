import ResizeAction from "./ResizeAction";
import {IResizeAction} from "./IResizeAction";

/**
 * @memberOf Actions.Resize
 * @description
 * Tries to prevent a "bad crop" by first attempting to use the fill mode,</br>
 * but adding padding if it is determined that more of the original image needs to be included in the final image.
 * @param {number} fillWidth
 * @param {number} fillHeight
 */
function fillPad(fillWidth?:number, fillHeight?:number) :IResizeAction {
  return new ResizeAction('fill_pad', fillWidth, fillHeight);
}

export default fillPad;
