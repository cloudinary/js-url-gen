import ResizeAdvancedActionWithPosition from "./ResizeAdvancedActionWithPosition";
import {BackgroundQualifier} from "../../../../values/background/shared/base/BackgroundQualifier";


/**
 * @description Defines an advanced resize with padding.
 * @class ResizePadAction
 * @augments ResizeAdvancedActionWithPosition
 */
class ResizePadAction extends ResizeAdvancedActionWithPosition {
  /**
   * @description Sets the background.
   * @param {Values.Background} backgroundQualifier Defines the background color to use instead of
   * transparent background areas or when resizing with padding.
   */
  background(backgroundQualifier: BackgroundQualifier): this {
    return this.addQualifier(backgroundQualifier);
  }
}


export default ResizePadAction;
