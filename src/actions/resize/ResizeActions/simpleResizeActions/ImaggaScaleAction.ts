import ResizeSimpleAction from "../shared/ResizeSimpleAction";

/**
 * @description
 * Scales your image based on automatically calculated areas of interest within each specific photo.
 *
 * For details, see the Imagga Crop and Scale {@link  https://cloudinary.com/documentation/imagga_crop_and_scale_addon#smartly_scale_images |  add-on documentation}.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {ResizeSimpleAction}
 */
function imaggaScale(width?: number | string, height?: number | string): ResizeSimpleAction {
  return new ResizeSimpleAction('imagga_scale', width, height);
}

export default imaggaScale;
