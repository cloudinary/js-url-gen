import {LayerAction} from "./layer/LayerAction";
import {ImageSource} from "../qualifiers/source/sourceTypes/ImageSource";
import {BaseTextSource} from "../qualifiers/source/sourceTypes/BaseTextSource";
import {FetchSource} from "../qualifiers/source/sourceTypes/FetchSource";


/**
 * @memberOf Actions
 * @namespace Underlay
 * @description Adds an image or a text layer as an underlay under the base layer. </br>
 * @example
 * import {Cloudinary} from "@cloudinary/base/instance/Cloudinary";
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.underlay(
 *       Underlay.source(Source.image('sample'))
 *     )
 */

/**
 * @summary action
 * @description Adds a layer for an asset
 * @param {Qualifiers.Source.ImageSource | Qualifiers.Source.TextSource} source
 *        The Source used for the layer, use the functions provided {@link Qualifiers.Source|here} to easily create these objects
 * @memberOf Actions.Underlay
 * @return {SDK.LayerAction}
 */
function source(source: ImageSource | BaseTextSource | FetchSource): LayerAction {
  return new LayerAction(source)
    .setLayerType('u');
}

const Underlay = {source};
export {Underlay, source};
