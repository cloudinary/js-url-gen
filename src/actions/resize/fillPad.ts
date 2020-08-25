import ResizeAction from "./ResizeAction";
import {resizeActionFactory} from "./IResizeTypes";

/**
 * @memberOf Actions.Resize
 * @type Types.resizeActionFactory
 * @description
 * Tries to prevent a "bad crop" by first attempting to use the fill mode,</br>
 * but adding padding if it is determined that more of the original image needs to be included in the final image.
 * @param {number|string} fillWidth
 * @param {number|string} fillHeight
 */
const fillPad:resizeActionFactory = function(fillWidth, fillHeight) :ResizeAction {
  return new ResizeAction('fill_pad', fillWidth, fillHeight);
};

export default fillPad;
