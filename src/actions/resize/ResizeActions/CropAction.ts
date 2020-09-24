import ResizeSimpleAction from "./ResizeSimpleAction";


/**
 * @memberOf Actions.Resize
 * @description
 * Extracts a region of the given width and height out of the original image.
 * @param {number|string} width
 * @param {number|string} height
 * @return {ResizeSimpleAction}
 */
function crop(width?: number|string, height?: number|string) :ResizeSimpleAction {
  return new ResizeSimpleAction('crop', width, height);
}

export default crop;
