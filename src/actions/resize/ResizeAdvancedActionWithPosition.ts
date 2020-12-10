import ResizeAdvancedAction from "./ResizeAdvancedAction";
import {Qualifier} from "../../internal/qualifier/Qualifier";

/**
 * @description Defines an advanced resize with positional arguments (x, y).
 * @class ResizeAdvancedActionWithPosition
 * @augments ResizeAdvancedAction
 */
class ResizeAdvancedActionWithPosition extends ResizeAdvancedAction {
  /**
   * @description Horizontal position for custom-coordinates based cropping.
   * @param {number} x The x position.
   */
  x(x:number | string): this {
    return this.addQualifier(new Qualifier('x', x));
  }

  /**
   * @description Vertical position for custom-coordinates based cropping
   * @param {number} y The y position.
   */
  y(y:number | string): this {
    return this.addQualifier(new Qualifier('y', y));
  }
}


export default ResizeAdvancedActionWithPosition;
