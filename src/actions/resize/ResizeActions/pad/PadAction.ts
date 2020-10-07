import ResizePadAction from "../shared/ResizePadAction";

/**
 * @description
 * Resizes the asset to fill the given width and height while retaining the original aspect ratio.
 *
 * If the proportions of the original asset do not match the given width and height, padding is added to the asset
 * to reach the required size.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {ResizePadAction}
 */
function pad(width?: string|number, height?: string|number) :ResizePadAction {
  return new ResizePadAction('pad', width, height);
}

export default pad;
