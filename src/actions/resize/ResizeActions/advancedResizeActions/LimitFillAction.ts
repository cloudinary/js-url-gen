import ResizeAdvancedAction from "../shared/ResizeAdvancedAction";

/**
 * @description
 * Creates an asset with the exact given width and height without distorting the asset, but only if the original
 * asset is larger than the specified resolution limits.
 *
 * The asset is scaled down to fill the given width and height without distorting the asset, and then the dimension
 * that exceeds the request is cropped. If the original dimensions are both smaller than the requested size, it is
 * not resized at all.
 *
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {LimitFillAction}
 */
function limitFill(width?: string|number, height?: string|number) :ResizeAdvancedAction {
  return new ResizeAdvancedAction('lfill', width, height);
}

export default limitFill;
