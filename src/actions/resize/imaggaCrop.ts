import ResizeAction from "./ResizeAction";
import {IResizeAction} from "./IResizeAction";

/**
 * @memberOf Actions.Resize
 * @description
 * Tries to prevent a "bad crop" by first attempting to use the fill mode,</br>
 * but adding padding if it is determined that more of the original image needs to be included in the final image.
 * @param {number} imaggaWidth
 * @param {number} imaggaHeight
 */
function imaggaCrop(imaggaWidth?:number, imaggaHeight?:number) :IResizeAction {
  return new ResizeAction('imagga_crop', imaggaWidth, imaggaHeight);
}

export default imaggaCrop;
