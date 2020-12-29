import {LayerAction} from "./layer/LayerAction";
import {ImageSource} from "../values/source/sourceTypes/ImageSource";
import {TextSource} from "../values/source/sourceTypes/TextSource";
import {FetchSource} from "../values/source/sourceTypes/FetchSource";


/**
 * @@doc
 * @memberOf Actions
 * @namespace Underlay
 * @description
 * Adds a video, text or image as an underlay over the base layer. </br>
 * @example
 * new CloudinaryImage('woman')
 *    .underlay(
 *       Underlay.source(Source.image('sample'))
 *     )
 */

/**
 * Adds a layer for an asset
 * @param {Values.Source.ImageSource | Values.Source.TextSource} source
 *        The Source used for the layer, use the functions provided {@link Values.Source|here} to easily create these objects
 * @memberOf Actions.Underlay
 * @return {SDK.LayerAction}
 */
function source(source: ImageSource | TextSource | FetchSource): LayerAction {
  return new LayerAction(source)
    .setLayerType('u');
}

const Underlay = {source};
export {Underlay, source};
