import {BaseSource} from "../values/source/BaseSource";
import {LayerAction} from "./layer/LayerAction";

/**
 * @@doc
 * @description Adds a video, text or image as an overlay over the base layer. </br>
 * @memberOf Actions
 * @namespace Overlay
 * @example
 * new CloudinaryImage('woman')
 *    .overlay(
 *       Overlay.source(Source.image('sample'))
 *     )
 */


/**
 * @memberOf Actions.Overlay
 * @description Adds a layer for an asset
 * @param {ImageSource | TextSource | VideoSource} source The Source used for the layer, use the builders provided {@link Values.Source|here}
 * @return {SDK.LayerAction}
 */
function source(source: BaseSource): LayerAction {
  return new LayerAction(source)
    .setLayerType('l');
}

const Overlay = {source};
export {Overlay, source};
