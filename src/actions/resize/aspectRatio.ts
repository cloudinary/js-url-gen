import {ResizeAction} from "./Resize";
import {IResizeAction} from "./IResizeAction";

/**
 * @param ratio
 */
function aspectRatio(ratio:string | number) :IResizeAction {
  return new ResizeAction().aspectRatio(ratio);
}

export default aspectRatio;
