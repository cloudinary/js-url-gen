import {GravityQualifier} from "../../../values/gravity/Gravity";
import ResizeSimpleAction from "./shared/ResizeSimpleAction";

/**
 * @description Defines a scaling resize action.
 * @class ScaleAction
 * @augments ResizeSimpleAction
 */
class ScaleAction extends ResizeSimpleAction {
  /**
   * @description Changes the aspect ratio of an image while retaining all important content and avoiding unnatural
   * distortions.
   * @return {this}
   */
  liquidRescaling(): this {
    return this.addQualifier(new GravityQualifier('liquid'));
  }
}

/**
 * @description
 * Changes the size of the image exactly to the given width and height without necessarily retaining the original aspect ratio:<br/>
 * all original image parts are visible but might be stretched or shrunk.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {ScaleAction}
 */
function scale(width?: number|string, height?: number|string) :ScaleAction {
  return new ScaleAction('scale', width, height);
}

export default scale;
