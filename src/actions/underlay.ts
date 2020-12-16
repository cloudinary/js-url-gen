/**
 * @@doc
 * @description
 * Adds a video, text or image as an underlay over the base layer. </br>
 * When adding an underlay to an image, use the imageLayer.
 * When adding an underlay to a video, use the videoLayer.</br></br>
 * See the {@link Actions.Overlay|overlay} section for more information
 * @memberOf Actions
 * @namespace Underlay
 */

import {LayerAction} from "./overlay/LayerAction";
import {ImageSource} from "../values/source/sourceTypes/ImageSource";
import {TextSource} from "../values/source/sourceTypes/TextSource";

/**
 *
 */
function source(source: ImageSource | TextSource): LayerAction {
  return new LayerAction(source)
    .setLayerType('u');
}

const Underlay = {source};
export {Underlay, source};
