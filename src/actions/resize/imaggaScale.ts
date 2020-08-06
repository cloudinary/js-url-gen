import ResizeAction from "./ResizeAction";
import {IResizeAction} from "./IResizeAction";

/**
 * @memberOf Actions.Resize
 * @description
 * Generates a smartly scaled image that perfectly fits the requested dimensions.
 * @param {number} imaggaWidth
 * @param {number} imaggaHeight
 */
function imaggaScale(imaggaWidth?:number, imaggaHeight?:number) :IResizeAction {
  return new ResizeAction('imagga_scale', imaggaWidth, imaggaHeight);
}

export default imaggaScale;
