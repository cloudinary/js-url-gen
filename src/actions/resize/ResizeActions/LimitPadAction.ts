import ResizeSimpleAction from "./ResizeSimpleAction";


class LimitPadAction extends ResizeSimpleAction {

}

/**
 * @memberOf Actions.Resize
 * @description
 * Same as the Pad::pad mode but only if the original image is larger than the given limit (width and height),</br>
 * in which case the image is scaled down to fill the given width and height while retaining the original aspect ratio and with all of the original image visible.
 * @param {number|string} width
 * @param {number|string} height
 */
function limitPad(width?: string|number, height?: string|number) :LimitPadAction {
  return new LimitPadAction('lpad', width, height);
}

export default limitPad;
