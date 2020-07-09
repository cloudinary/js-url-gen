import {ResizeAction} from "./Resize";
import {IResizeAction} from "./IResizeAction";

/**
 * @param {number} padWidth
 * @param {number} padHeight
 */
function minimumPad(padWidth:number, padHeight?:number) :IResizeAction {
  return new ResizeAction('mpad', padWidth, padHeight);
}

export default minimumPad;
