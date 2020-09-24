import ResizeAdvancedAction from "./ResizeAdvancedAction";

class PadAction extends ResizeAdvancedAction {
  constructor(width?: number|string, height?: number|string) {
    /* istanbul ignore next */
    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    super('pad', width, height);
  }
}

/**
 * @memberOf Actions.Resize
 * @description
 * Resizes the image to fill the given width and height while retaining the original aspect ratio and with all of the original image visible.
 * @param {number|string} width
 * @param {number|string} height
 * @return {PadAction}
 */
function pad(width?: string|number, height?: string|number) :PadAction {
  return new PadAction(width, height);
}

export default pad;
