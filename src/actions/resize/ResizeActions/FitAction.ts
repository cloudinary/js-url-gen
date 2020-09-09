import ResizeSimpleAction from "./ResizeSimpleAction";


/**
 * @memberOf Actions.Resize
 * @description
 * The image is resized so that it takes up as much space as possible within a bounding box defined by the given width and height parameters.</br>
 * The original aspect ratio is retained and all of the original image is visible.
 * @param {number|string} width
 * @param {number|string} height
 */
export default function fit(width?: string|number, height?: string|number) :ResizeSimpleAction {
  return new ResizeSimpleAction('fit', width, height);
}
