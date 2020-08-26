import ResizeAction from "./ResizeAction";
import {resizeActionFactory} from "./IResizeTypes";

/**
 * @memberOf Actions.Resize
 * @type Types.resizeActionFactory
 * @description
 * The thumb cropping mode is specifically used for creating image thumbnails from either face or custom coordinates,</br>
 * and must always be accompanied by the gravity parameter set to one of the face detection or custom values.
 * @param {number|string} thumbWidth
 * @param {number|string} thumbHeight
 */
const thumbnail:resizeActionFactory = function(thumbWidth, thumbHeight) :ResizeAction {
  return new ResizeAction('thumb', thumbWidth, thumbHeight);
};

export default thumbnail;
