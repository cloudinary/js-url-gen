import ResizeAction from "./ResizeAction";
import {resizeActionFactory} from "./IResizeTypes";

/**
 * @memberOf Actions.Resize
 * @type Types.resizeActionFactory
 * @description Creates an image with the exact given width and height without distorting the image.<br/>
 * This option first scales up or down as much as needed to at least fill both of the given dimensions.<br/><br/>
 * If the requested aspect ratio is different than the original, cropping will occur on the dimension that exceeds the requested size after scaling.
 * @param {number|string} fillWidth
 * @param {number|string} fillHeight
 */
const fill:resizeActionFactory = function(fillWidth, fillHeight) :ResizeAction {
  return new ResizeAction('fill', fillWidth, fillHeight);
};

export default fill;
