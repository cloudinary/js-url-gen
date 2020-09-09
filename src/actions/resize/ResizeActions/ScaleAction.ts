import Param from "../../../parameters/Param";
import {toFloatAsString} from "../../../utils/toFloatAsString";
import {GravityParam} from "../../../params/gravity/Gravity";
import ResizeSimpleAction from "./ResizeSimpleAction";

class ScaleAction extends ResizeSimpleAction {
  constructor(width: number|string, height: number|string) {
    /* istanbul ignore next */
    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    super('scale', width, height);
  }

  aspectRatio(ratio:number|string): this {
    // toFloatAsString is used to ensure 1 turns into 1.0
    return this.addParam(new Param('ar', toFloatAsString(ratio)));
  }

  isLiquid(): this {
    return this.addParam(new GravityParam('liquid'));
  }
}

/**
 * @memberOf Actions.Resize
 * @description
 * Change the size of the image exactly to the given width and height without necessarily retaining the original aspect ratio:<br/>
 * all original image parts are visible but might be stretched or shrunk.
 * @param {number|string} width
 * @param {number|string} height
 */
export default function scale(width?: number|string, height?: number|string) :ScaleAction {
  return new ScaleAction(width, height);
}
