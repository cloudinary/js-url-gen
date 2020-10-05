import ResizeSimpleAction from "./ResizeSimpleAction";


class ImaggaScaleAction extends ResizeSimpleAction {

}

/**
 * @memberOf Actions.Resize
 * @description
 * Generates a smartly scaled image that perfectly fits the requested dimensions.
 * @param {number|string} width
 * @param {number|string} height
 * @return {ImaggaScaleAction}
 */
function imaggaScale(width?: number | string, height?: number | string): ImaggaScaleAction {
  return new ImaggaScaleAction('imagga_scale', width, height);
}

export default imaggaScale;
