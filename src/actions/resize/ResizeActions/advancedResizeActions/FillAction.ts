import ResizeAdvancedAction from "../shared/ResizeAdvancedAction";

/**
 * @description
 * Creates an image with the exact given width and height without distorting the image.<br/>
 * This option first scales up or down as much as needed to at least fill both of the given dimensions.<br/><br/>
 * If the requested aspect ratio is different than the original, cropping will occur on the dimension that exceeds the requested size after scaling.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {ResizeAdvancedAction}
 */
function fill(width?: string|number, height?: string|number) :ResizeAdvancedAction {
  return new ResizeAdvancedAction('fill', width, height);
}
export default fill;
