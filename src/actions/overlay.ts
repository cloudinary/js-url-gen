import {BaseSource} from "../values/source/BaseSource";
import {LayerAction} from "./layer/LayerAction";

/**
 * @@doc
 * @description Adds a video, text or image as an overlay over the base layer. </br>
 * When adding an overlay to an image, use the imageLayer.
 * When adding an overlay to a video, use the videoLayer.
 * @memberOf Actions
 * @namespace Overlay
 */



/**
 * @description Adds a layer for an asset
 * @param {source | ImageSource | TextSource | VideoSource} source The Source used for the layer, use the builders provided {@link Values.Source|here}
 * @memberOf Actions.Overlay
 * @return {SDK.LayerAction}
 */
function source(source: BaseSource): LayerAction {
  return new LayerAction(source)
    .setLayerType('l');
}

const Overlay = {source};
export {Overlay, source};
