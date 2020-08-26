import ResizeAction from "./ResizeAction";
import {resizeActionFactory} from "./IResizeTypes";


/**
 * @memberOf Actions.Resize
 * @type Types.resizeActionFactory
 * @description Extracts a region of the given width and height out of the original image.
 * @param {number|string} cropWidth
 * @param {number|string} cropHeight
 */

const crop:resizeActionFactory = function (cropWidth, cropHeight) :ResizeAction {
  return new ResizeAction('crop', cropWidth, cropHeight);
};

export default crop;
