import ResizeAdvancedAction from "./ResizeAdvancedAction";

/**
 * @@doc
 * @description A class used to define resize pad.
 * @class PadAction
 * @augments ResizeAdvancedAction
 */
class PadAction extends ResizeAdvancedAction {
  constructor(width?: number|string, height?: number|string) {
    /* istanbul ignore next */
    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    super('pad', width, height);
  }
}

/**
 * @description
 * Resizes the asset to fill the given width and height while retaining the original aspect ratio.
 *
 * If the proportions of the original asset do not match the given width and height, padding is added to the asset
 * to reach the required size.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {PadAction}
 */
function pad(width?: string|number, height?: string|number) :PadAction {
  return new PadAction(width, height);
}

export default pad;
