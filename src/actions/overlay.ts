import {BaseSource} from "../qualifiers/source/BaseSource";
import {LayerAction} from "./layer/LayerAction";

/**
 * @description Adds a video, text or an image layer as an overlay over the base layer. </br>
 * @memberOf Actions
 * @namespace Overlay
 * @example
 * new CloudinaryImage('woman')
 *    .overlay(
 *       Overlay.source(Source.image('sample'))
 *     )
 */


/**
 * @summary action
 * @memberOf Actions.Overlay
 * @description Adds a layer for an asset
 * @param {Qualifiers.Source.ImageSource | Qualifiers.Source.TextSource | Qualifiers.Source.VideoSource} source
 *        The Source used for the layer, use the functions provided {@link Qualifiers.Source|here} to easily create these objects
 * @return {SDK.LayerAction}
 */
function source(source: BaseSource): LayerAction {
  return new LayerAction(source)
    .setLayerType('l');
}

const Overlay = {source};
export {Overlay, source};
