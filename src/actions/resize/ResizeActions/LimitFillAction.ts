import ResizeAdvancedAction from "./ResizeAdvancedAction";

class LimitFillAction extends ResizeAdvancedAction {
  constructor(width?: number|string, height?: number|string) {
    /* istanbul ignore next */
    // Required due to https://github.com/microsoft/TypeScript/issues/13029 \n // Required due to https://github.com/microsoft/TypeScript/issues/13029
    super('lfill', width, height);
  }
}


/**
 * @memberOf Actions.Resize
 * @description
 * Same as the Fill::fill mode, but only if the original image is larger than the specified resolution limits,<br/>
 * in which case the image is scaled down to fill the given width and height without distorting the image,<br/>
 * and then the dimension that exceeds the request is cropped.
 * @param {number|string} width
 * @param {number|string} height
 */
export default function limitFill(width?: string|number, height?: string|number) :LimitFillAction {
  return new LimitFillAction(width, height);
}
