import ResizeAction from "./ResizeAction";
import {IResizeAction} from "./IResizeAction";

/**
 * @memberOf Actions.Resize
 * @description
 * The thumb cropping mode is specifically used for creating image thumbnails from either face or custom coordinates,</br>
 * and must always be accompanied by the gravity parameter set to one of the face detection or custom values.
 * @param {number} thumbWidth
 * @param {number} thumbHeight
 */
function thumbnail(thumbWidth?:number, thumbHeight?:number) :IResizeAction {
  return new ResizeAction('thumb', thumbWidth, thumbHeight);
}

export default thumbnail;
