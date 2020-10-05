import ResizeAdvancedAction from "./ResizeAdvancedAction";

/**
 * @class FillAction
 * @augments ResizeAdvancedAction
 * @@doc
 * @description A class used to define resize fill.
 */
class FillAction extends ResizeAdvancedAction {
  constructor(width?: number|string, height?: number|string) {
    /* istanbul ignore next */
    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    super('fill', width, height);
  }
}

/**
 * @memberOf Actions.Resize
 * @description
 * Creates an image with the exact given width and height without distorting the image.<br/>
 * This option first scales up or down as much as needed to at least fill both of the given dimensions.<br/><br/>
 * If the requested aspect ratio is different than the original, cropping will occur on the dimension that exceeds the requested size after scaling.
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {FillAction}
 */
function fill(width?: string|number, height?: string|number) :FillAction {
  return new FillAction(width, height);
}
export default fill;
