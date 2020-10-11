import ResizeSimpleAction from "../shared/ResizeSimpleAction";

/**
 * @description
 * Resizes the asset so that it takes up as much space as possible within a bounding box defined by the given
 * width and height parameters, but only if the original asset is larger than the given limit (width and height).
 *
 * The asset is scaled down, the original aspect ratio is retained and all of the original asset is visible.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {ResizeSimpleAction}
 */
function limitFit(width?: number|string, height?: number|string) :ResizeSimpleAction {
  return new ResizeSimpleAction('limit', width, height);
}

export default limitFit;
