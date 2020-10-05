import {GravityParam} from "../../../values/gravity/Gravity";
import ResizeSimpleAction from "./ResizeSimpleAction";

/**
 * @class ScaleAction
 * @augments ResizeSimpleAction
 * @@doc
 * @description A class used to define resize scale.
 */
class ScaleAction extends ResizeSimpleAction {
  constructor(width: number|string, height: number|string) {
    /* istanbul ignore next */
    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    super('scale', width, height);
  }

  /**
   * @description Changes the aspect ratio of an image while retaining all important content and avoiding unnatural
   * distortions.
   */
  isLiquid(): this {
    return this.addQualifier(new GravityParam('liquid'));
  }
}

/**
 * @memberOf Actions.Resize
 * @description
 * Change the size of the image exactly to the given width and height without necessarily retaining the original aspect ratio:<br/>
 * all original image parts are visible but might be stretched or shrunk.
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {ScaleAction}
 */
function scale(width?: number|string, height?: number|string) :ScaleAction {
  return new ScaleAction(width, height);
}

export default scale;
