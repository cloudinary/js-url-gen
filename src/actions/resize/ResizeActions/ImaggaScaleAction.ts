import ResizeSimpleAction from "./ResizeSimpleAction";
import Qualifier from "../../../qualifier/Qualifier";
import {toFloatAsString} from "../../../utils/toFloatAsString";


class ImaggaScaleAction extends ResizeSimpleAction {
  aspectRatio(ratio:number|string): this {
    // toFloatAsString is used to ensure 1 turns into 1.0
    return this.addQualifier(new Qualifier('ar', toFloatAsString(ratio)));
  }
}

/**
 * @memberOf Actions.Resize
 * @description
 * Generates a smartly scaled image that perfectly fits the requested dimensions.
 * @param {number|string} width
 * @param {number|string} height
 * @return {ImaggaScaleAction}
 */
function imaggaScale(width?: number | string, height?: number | string): ImaggaScaleAction {
  return new ImaggaScaleAction('imagga_scale', width, height);
}

export default imaggaScale;
