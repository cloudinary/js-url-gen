/**
 * Determines how to crop, scale, and/or zoom the delivered asset according to the requested dimensions.
 * @memberOf Actions
 * @namespace Resize
 */

import ResizePadAction from "./resize/ResizePadAction";
import ResizeSimpleAction from "./resize/ResizeSimpleAction";
import {ScaleAction} from "./resize/ScaleAction";
import {ThumbResizeAction} from "./resize/ThumbnailAction";
import {AutoGravity} from "../values/gravity/autoGravity/AutoGravity";
import {CompassGravity} from "../values/gravity/compassGravity/CompassGravity";
import ResizeAdvancedAction from "./resize/ResizeAdvancedAction";
import ResizeCropAction from "./resize/ResizeCropAction";
import {ResizeFillAction} from "./resize/ResizeFillAction";

/**
 * @description
 * Changes the size of the image exactly to the given width and height without necessarily retaining the original aspect ratio:<br/>
 * all original image parts are visible but might be stretched or shrunk.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {ScaleAction}
 */
function scale(width?: number | string, height?: number | string): ScaleAction {
  return new ScaleAction('scale', width, height);
}



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


/**
 * @description
 * Crops your image based on automatically calculated areas of interest within each specific photo.
 *
 * For details, see the Imagga Crop and Scale {@link  https://cloudinary.com/documentation/imagga_crop_and_scale_addon#smartly_crop_images |  add-on documentation}.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {ResizeSimpleAction}
 */
function imaggaCrop(width?: number|string, height?: number|string) :ResizeSimpleAction {
  return new ResizeSimpleAction('imagga_crop', width, height);
}

/**
 * @description Extracts a region of the given width and height out of the original image.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {ResizeCropAction}
 */
function crop(width?: number|string, height?: number|string) :ResizeCropAction {
  return new ResizeCropAction('crop', width, height);
}

/**
 * @description
 * Creates an image with the exact given width and height without distorting the image.<br/>
 * This option first scales up or down as much as needed to at least fill both of the given dimensions.<br/><br/>
 * If the requested aspect ratio is different than the original, cropping will occur on the dimension that exceeds the requested size after scaling.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {ResizeFillAction}
 */
function fill(width?: string|number, height?: string|number) :ResizeFillAction {
  return new ResizeFillAction('fill', width, height);
}

/**
 * @description
 * The image is resized so that it takes up as much space as possible within a bounding box defined by the given width and height parameters.</br>
 * The original aspect ratio is retained and all of the original image is visible.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {ResizeSimpleAction}
 */
function fit(width?: string|number, height?: string|number) :ResizeSimpleAction {
  return new ResizeSimpleAction('fit', width, height);
}

/**
 * @description
 * Resizes the asset to fill the given width and height while retaining the original aspect ratio.
 *
 * If the proportions of the original asset do not match the given width and height, padding is added to the asset
 * to reach the required size.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {ResizePadAction}
 */
function pad(width?: string|number, height?: string|number) :ResizePadAction<CompassGravity> {
  return new ResizePadAction('pad', width, height);
}


/**
 * @description
 * Creates an asset with the exact given width and height without distorting the asset, but only if the original
 * asset is larger than the specified resolution limits.
 *
 * The asset is scaled down to fill the given width and height without distorting the asset, and then the dimension
 * that exceeds the request is cropped. If the original dimensions are both smaller than the requested size, it is
 * not resized at all.
 *
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {LimitFillAction}
 */
function limitFill(width?: string|number, height?: string|number) :ResizeAdvancedAction {
  return new ResizeAdvancedAction('lfill', width, height);
}


/**
 * @description
 * Resizes the asset so that it takes up as much space as possible within a bounding box defined by the given
 * width and height parameters, but only if the original asset is larger than the given limit (width and height).
 *
 * The asset is scaled down, the original aspect ratio is retained and all of the original asset is visible.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {ResizeSimpleAction}
 */
function limitFit(width?: number|string, height?: number|string) :ResizeSimpleAction {
  return new ResizeSimpleAction('limit', width, height);
}


/**
 * @description
 * Resizes the asset to fill the given width and height while retaining the original aspect ratio, but only if the
 * original asset is smaller than the given minimum (width and height).
 *
 * The asset is scaled up.  If the proportions of the original asset do not match the given width and height,
 * padding is added to the asset to reach the required size.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {ResizePadAction}
 */
function minimumPad(width?: string|number, height?: string|number) :ResizePadAction<CompassGravity> {
  return new ResizePadAction('mpad', width, height);
}


/**
 * @description
 * Resizes the asset so that it takes up as much space as possible within a bounding box defined by the given
 * width and height parameters, but only if the original asset is smaller than the given minimum (width and height).
 *
 * The asset is scaled up, the original aspect ratio is retained and all of the original asset is visible.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {ResizeSimpleAction}
 */
function minimumFit(width?: number|string, height?: number|string) :ResizeSimpleAction {
  return new ResizeSimpleAction('mfit', width, height);
}


/**
 * @memberOf Actions.Resize
 * @description
 * Tries to prevent a "bad crop" by first attempting to use the fill mode, but adding padding if it is determined
 * that more of the original image needs to be included in the final image.
 *
 * Especially useful if the aspect ratio of the delivered image is considerably different from the original's
 * aspect ratio.
 *
 * Only supported in conjunction with Automatic cropping.
 *
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {ResizePadAction}
 */
function fillPad(width?: string|number, height?: string|number) :ResizePadAction<AutoGravity> {
  return new ResizePadAction('fill_pad', width, height);
}

/**
 * @description
 * The thumb cropping mode is specifically used for creating image thumbnails from either face or custom coordinates,</br>
 * and must always be accompanied by the gravity parameter set to one of the face detection or custom values.
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {ThumbResizeAction}
 */
function thumbnail(width?: string|number, height?: string|number) :ThumbResizeAction {
  return new ThumbResizeAction('thumb', width, height);
}


/**
 * @description
 * Resizes the asset to fill the given width and height while retaining the original aspect ratio, but only if the
 * original asset is larger than the given limit (width and height).
 *
 * The asset is scaled down.  If the proportions of the original asset do not match the given width and height,
 * padding is added to the asset to reach the required size.
 *
 * @memberOf Actions.Resize
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {ResizePadAction}
 */
function limitPad(width?: string|number, height?: string|number) :ResizePadAction<CompassGravity> {
  return new ResizePadAction('lpad', width, height);
}


const Resize = {
  imaggaScale,
  imaggaCrop,
  crop,
  fill,
  scale,
  minimumPad,
  fit,
  pad,
  limitFit,
  thumbnail,
  limitFill,
  minimumFit,
  limitPad,
  fillPad
};
export {
  Resize,
  imaggaScale,
  imaggaCrop,
  crop,
  fill,
  scale,
  minimumPad,
  fit,
  pad,
  limitFit,
  thumbnail,
  limitFill,
  minimumFit,
  limitPad,
  fillPad
};
