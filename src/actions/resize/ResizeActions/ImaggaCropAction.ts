import ResizeSimpleAction from "./ResizeSimpleAction";

/**
 * @description Crops your image based on automatically calculated areas of interest within each specific photo.
 * For details, see the Imagga Crop and Scale {@link  https://cloudinary.com/documentation/imagga_crop_and_scale_addon#smartly_crop_images |  add-on documentation}.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {ResizeSimpleAction}
 */
function imaggaCrop(width?: number|string, height?: number|string) :ResizeSimpleAction {
  return new ResizeSimpleAction('imagga_crop', width, height);
}

export default imaggaCrop;
