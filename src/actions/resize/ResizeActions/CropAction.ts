import ResizeSimpleAction from "./ResizeSimpleAction";

/**
 * @description Extracts a region of the given width and height out of the original image.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {ResizeSimpleAction}
 */
function crop(width?: number|string, height?: number|string) :ResizeSimpleAction {
  return new ResizeSimpleAction('crop', width, height);
}

export default crop;
