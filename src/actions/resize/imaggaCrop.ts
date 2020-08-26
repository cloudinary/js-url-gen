import ResizeAction from "./ResizeAction";
import {resizeActionFactory} from "./IResizeTypes";

/**
 * @memberOf Actions.Resize
 * @type Types.resizeActionFactory
 * @description
 * Tries to prevent a "bad crop" by first attempting to use the fill mode,</br>
 * but adding padding if it is determined that more of the original image needs to be included in the final image.
 * @param {number|string} imaggaWidth
 * @param {number|string} imaggaHeight
 */
const imaggaCrop:resizeActionFactory = function(imaggaWidth, imaggaHeight) :ResizeAction {
  return new ResizeAction('imagga_crop', imaggaWidth, imaggaHeight);
};

export default imaggaCrop;
