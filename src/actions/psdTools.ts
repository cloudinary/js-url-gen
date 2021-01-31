import ClipAction from "./psdTools/ClipAction";
import GetLayerAction from "./psdTools/GetLayerAction";
import SmartObjectAction from "./psdTools/SmartObjectAction";

/**
 * @description Represents a layer in a Photoshop document.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/paged_and_layered_media#deliver_selected_layers_of_a_psd_image | Deliver selected layers of a PSD image}
 * @memberOf Actions
 * @namespace PSDTools
 */


/**
 * @summary action
 * @description Trims the pixels of a PSD image according to a Photoshop clipping path that is stored in the image's metadata.
 * @memberOf Actions.PSDTools
 * @return {Actions.PSDTools.ClipAction}
 */
function clip(): ClipAction {
  return new ClipAction();
}

/**
 * @summary action
 * @description Delivers an image containing only specified layers of a Photoshop image.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/paged_and_layered_media#deliver_selected_layers_of_a_psd_image | Deliver selected layers of a PSD image}
 * @memberOf Actions.PSDTools
 * @return {Actions.PSDTools.GetLayerAction}
 */
function getLayer(): GetLayerAction {
  return new GetLayerAction();
}

/**
 * @summary action
 * @description Extracts the original content of an embedded object of a Photoshop image.
 * @memberOf Actions.PSDTools
 * @return {Actions.PSDTools.SmartObjectAction}
 */
function smartObject(): SmartObjectAction {
  return new SmartObjectAction();
}


const PSDTools = {clip, getLayer, smartObject};
export {PSDTools, clip, getLayer, smartObject};
