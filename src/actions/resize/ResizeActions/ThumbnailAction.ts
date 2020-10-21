import Qualifier from "../../../qualifier/Qualifier";
import ResizeAdvancedAction from "./shared/ResizeAdvancedAction";

/**
 * @description Defines a thumbnail resize action.
 * @class ThumbResizeAction
 * @augments ResizeAdvancedAction
 */
class ThumbResizeAction extends ResizeAdvancedAction {
  /**
   * @description Controls how much of the original image surrounding the face to keep when using either the 'crop' or 'thumb' cropping modes with face detection.
   * @param {number} z The zoom factor. (Default: 1.0)
   */
  zoom(z:number): this {
    return this.addQualifier(new Qualifier('z', z));
  }
}

/**
 * @description
 * The thumb cropping mode is specifically used for creating image thumbnails from either face or custom coordinates,</br>
 * and must always be accompanied by the gravity parameter set to one of the face detection or custom values.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {ThumbResizeAction}
 */
function thumbnail(width?: string|number, height?: string|number) :ThumbResizeAction {
  return new ThumbResizeAction('thumb', width, height);
}

export default thumbnail;
