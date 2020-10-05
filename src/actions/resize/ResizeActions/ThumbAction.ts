import ResizeSimpleAction from "./ResizeSimpleAction";
import {GravityParam} from "../../../values/gravity/Gravity";

/**
 * @class ThumbResizeAction
 * @augments ResizeSimpleAction
 * @@doc
 * @description A class used to define resize thumb.
 */
class ThumbResizeAction extends ResizeSimpleAction {
  gravity(gravity:GravityParam): this {
    return this.addQualifier(gravity);
  }
}

/**
 * @memberOf Actions.Resize
 * @description
 * The thumb cropping mode is specifically used for creating image thumbnails from either face or custom coordinates,</br>
 * and must always be accompanied by the gravity parameter set to one of the face detection or custom values.
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {ThumbResizeAction}
 */
function thumb(width?: string|number, height?: string|number) :ThumbResizeAction {
  return new ThumbResizeAction('thumb', width, height);
}

export default thumb;
