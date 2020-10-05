import ResizeAdvancedAction from "./ResizeAdvancedAction";

/**
 * @@doc
 * @description A class used to define resize minimumPad.
 * @class MinimumPadAction
 * @augments ResizeAdvancedAction
 */
class MinimumPadAction extends ResizeAdvancedAction {
  constructor(width?: number|string, height?: number|string) {
    /* istanbul ignore next */
    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    super('mpad', width, height);
  }

}

/**
 * @description
 * Resizes the asset to fill the given width and height while retaining the original aspect ratio, but only if the
 * original asset is smaller than the given minimum (width and height).
 *
 * The asset is scaled up.  If the proportions of the original asset do not match the given width and height,
 * padding is added to the asset to reach the required size.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {MinimumPadAction}
 */
function minimumPad(width?: string|number, height?: string|number) :MinimumPadAction {
  return new MinimumPadAction(width, height);
}

export default minimumPad;
