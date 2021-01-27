import {LayerAction} from "./layer/LayerAction";
import {ImageSource} from "../values/source/sourceTypes/ImageSource";
import {BaseTextSource} from "../values/source/sourceTypes/BaseTextSource";
import {FetchSource} from "../values/source/sourceTypes/FetchSource";


/**
 * @memberOf Actions
 * @namespace Underlay
 * @description Adds an image or a text layer as an underlay under the base layer. </br>
 * @example
 * new CloudinaryImage('woman')
 *    .underlay(
 *       Underlay.source(Source.image('sample'))
 *     )
 */

/**
 * @summary action
 * Adds a layer for an asset
 * @param {Values.Source.ImageSource | Values.Source.TextSource} source
 *        The Source used for the layer, use the functions provided {@link Values.Source|here} to easily create these objects
 * @memberOf Actions.Underlay
 * @return {SDK.LayerAction}
 */
function source(source: ImageSource | BaseTextSource | FetchSource): LayerAction {
  return new LayerAction(source)
    .setLayerType('u');
}

const Underlay = {source};
export {Underlay, source};
