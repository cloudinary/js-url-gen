import ResizePadAction from "../shared/ResizePadAction";
import {CompassGravity} from "../../../../values/gravity/compassGravity/CompassGravity";

/**
 * @description
 * Resizes the asset to fill the given width and height while retaining the original aspect ratio, but only if the
 * original asset is larger than the given limit (width and height).
 *
 * The asset is scaled down.  If the proportions of the original asset do not match the given width and height,
 * padding is added to the asset to reach the required size.
 *
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {ResizePadAction}
 */
function limitPad(width?: string|number, height?: string|number) :ResizePadAction<CompassGravity> {
  return new ResizePadAction('lpad', width, height);
}

export default limitPad;
