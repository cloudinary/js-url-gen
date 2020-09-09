import ResizeSimpleAction from "./ResizeSimpleAction";

/**
 * @memberOf Actions.Resize
 * @description
 * Generates a smartly scaled image that perfectly fits the requested dimensions.
 * @param {number|string} width
 * @param {number|string} height
 */
function imaggaScale(width?: number | string, height?: number | string): ResizeSimpleAction {
  return new ResizeSimpleAction('imagga_scale', width, height);
}

export default imaggaScale;
