import BackgroundAction from "../../../background/BackgroundAction";
import ResizeAdvancedActionWithPosition from "./ResizeAdvancedActionWithPosition";

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
   * @param {BackgroundAction} backgroundAction Defines the background color to use instead of
   * transparent background areas or when resizing with padding.
   */
  background(backgroundAction: BackgroundAction): this {
    return this.addQualifier(backgroundAction);
  }
}


export default ResizePadAction;
