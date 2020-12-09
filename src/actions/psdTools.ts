import ClipAction from "./psdTools/ClipAction";
import GetLayerAction from "./psdTools/GetLayerAction";
import SmartObjectAction from "./psdTools/SmartObjectAction";

/**
 * Represents a layer in a Photoshop document.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/paged_and_layered_media#deliver_selected_layers_of_a_psd_image | Deliver selected layers of a PSD image}
 * @memberOf Actions
 * @namespace PSDTools
 */


/**
 * @description Trims the pixels of a PSD image according to a Photoshop clipping path that is stored in the image's metadata.
 * @memberOf Actions.PSDTools
 * @param {string|number} path Number or the name of the clipping path.
 * @return {ClipAction}
 */
function clip(path: string | number): ClipAction {
  return new ClipAction(path);
}

/**
 * @description Delivers an image containing only specified layers of a Photoshop image.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/paged_and_layered_media#deliver_selected_layers_of_a_psd_image | Deliver selected layers of a PSD image}
 * @memberOf Actions.PSDTools
 * @return {GetLayerAction}
 */
function getLayer(): GetLayerAction {
  return new GetLayerAction();
}

/**
 * @description Extracts the original content of an embedded object of a Photoshop image.
 * @memberOf Actions.PSDTools
 * @return {SmartObjectAction}
 */
function smartObject(): SmartObjectAction {
  return new SmartObjectAction();
}


const PsdTools = {clip, getLayer, smartObject};
export {PsdTools, clip, getLayer, smartObject};