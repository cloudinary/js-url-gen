import ResizeAdvancedAction from "./ResizeAdvancedAction";

/**
 * @class PadAction
 * @augments ResizeAdvancedAction
 * @@doc
 * @description A class used to define resize pad.
 */
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
 * Resizes the asset to fill the given width and height while retaining the original aspect ratio.
 *
 * If the proportions of the original asset do not match the given width and height, padding is added to the asset
 * to reach the required size.
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {PadAction}
 */
function pad(width?: string|number, height?: string|number) :PadAction {
  return new PadAction(width, height);
}

export default pad;
