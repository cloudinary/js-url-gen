import ResizeAction from "./ResizeAction";
import {resizeActionFactory} from "./IResizeTypes";

/**
 * @memberOf Actions.Resize
 * @type Types.resizeActionFactory
 * @description
 * Generates a smartly scaled image that perfectly fits the requested dimensions.
 * @param {number|string} imaggaWidth
 * @param {number|string} imaggaHeight
 */
const imaggaScale:resizeActionFactory = function(imaggaWidth, imaggaHeight) :ResizeAction {
  return new ResizeAction('imagga_scale', imaggaWidth, imaggaHeight);
};

export default imaggaScale;
