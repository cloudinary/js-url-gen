import ResizeAdvancedAction from "./ResizeAdvancedAction";

/**
 * @class LimitFillAction
 * @augments ResizeAdvancedAction
 * @@doc
 * @description A class used to define resize limitFill.
 */
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
 * Creates an asset with the exact given width and height without distorting the asset, but only if the original
 * asset is larger than the specified resolution limits.
 *
 * The asset is scaled down to fill the given width and height without distorting the asset, and then the dimension
 * that exceeds the request is cropped. If the original dimensions are both smaller than the requested size, it is
 * not resized at all.
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {LimitFillAction}
 */
function limitFill(width?: string|number, height?: string|number) :LimitFillAction {
  return new LimitFillAction(width, height);
}

export default limitFill;
