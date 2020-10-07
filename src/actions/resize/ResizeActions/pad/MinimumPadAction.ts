import ResizePadAction from "../shared/ResizePadAction";

/**
 * @description
 * Resizes the asset to fill the given width and height while retaining the original aspect ratio, but only if the
 * original asset is smaller than the given minimum (width and height).
 *
 * The asset is scaled up.  If the proportions of the original asset do not match the given width and height,
 * padding is added to the asset to reach the required size.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {ResizePadAction}
 */
function minimumPad(width?: string|number, height?: string|number) :ResizePadAction {
  return new ResizePadAction('mpad', width, height);
}

export default minimumPad;
