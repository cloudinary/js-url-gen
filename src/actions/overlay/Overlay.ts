import {VideoRange} from "../../values/video/VideoRange";
import {LayerAction} from "./LayerAction";
import {BlendModeQualifier} from "../../values/blendMode/BlendModeQualifier";
import {PositionQualifier} from "../../values/position/PositionQualifier";
import {TextSource} from "../../values/sources/sourceTypes/TextSource";
import {VideoSource} from "../../values/sources/sourceTypes/VideoSource";
import {ImageSource} from "../../values/sources/sourceTypes/ImageSource";

/**
 * @@doc
 * Adds a video, text or image as an overlay over the base layer. </br>
 * When adding an overlay to an image, use the imageLayer.
 * When adding an overlay to a video, use the videoLayer.
 * @memberOf Actions
 * @namespace Overlay
 */


/**
 * @description
 * Adds a layer for an asset of type image
 * @param {ImageSource | TextSource} source The Source used for the layer, use the builders provided {@link Values.Sources|here}
 * @param {Values.Position} position The position of the overlay with respect to the base image.
 * @param {Values.BlendMode} blendMode The blend mode.
 * @memberOf Actions.Overlay
 * @return {LayerAction}
 */
function imageLayer(source: ImageSource | TextSource, position?:PositionQualifier, blendMode?:BlendModeQualifier): LayerAction {
  return new LayerAction(source, position, blendMode);
}

/**
 * Adds a layer for an asset of type video
 * @param {VideoSource | ImageSource | TextSource} source The Source used for the layer, use the builders provided {@link Values.Sources|here}
 * @param {Values.Position} position The position of the overlay with respect to the base image.
 * @param {VideoRange} timeLinePosition Sets the timeline position of the overlay.
 * @memberOf Actions.Overlay
 * @return {LayerAction}
 */
function videoLayer(source: VideoSource | ImageSource | TextSource, position?:PositionQualifier, timeLinePosition?:VideoRange): LayerAction {
  return new LayerAction(source, position, null, timeLinePosition);
}

export {imageLayer, videoLayer};
