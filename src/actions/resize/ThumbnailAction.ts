import {Qualifier} from "../../internal/qualifier/Qualifier";
import ResizeAdvancedAction from "./ResizeAdvancedAction";

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


export {ThumbResizeAction};
