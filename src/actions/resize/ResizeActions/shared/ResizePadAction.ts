import ResizeAdvancedActionWithPosition from "./ResizeAdvancedActionWithPosition";
import {BackgroundQualifier} from "../../../../values/background/shared/base/BackgroundQualifier";


/**
 * @@doc
 * @description A class used to define an advanced resize.
 * @class ResizePadAction
 * @augments ResizeAdvancedActionWithPosition
 */
class ResizePadAction extends ResizeAdvancedActionWithPosition {
  /**
   * @@doc
   * @description Adds background Action to Resize Action.
   * @param {Values.Background} backgroundQualifier Defines the background color to use instead of
   * transparent background areas or when resizing with padding.
   */
  background(backgroundQualifier: BackgroundQualifier): this {
    return this.addQualifier(backgroundQualifier);
  }
}


export default ResizePadAction;
