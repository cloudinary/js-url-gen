/**
 * @memberOf Values
 * @typedef rotationModeValues
 * @property {string} AUTO_RIGHT Rotate image 90 degrees clockwise only if the requested aspect ratio does not match the image's aspect ratio.
 * @property {string} AUTO_LEFT Rotate image 90 degrees counterclockwise only if the requested aspect ratio does not match the image's aspect
 *                              ratio.
 * @property {string} VERTICAL_FLIP  Vertical mirror flip of the image.
 * @property {string} HORIZONTAL_FLIP Horizontal mirror flip of the image.
 * @property {string} IGNORE By default, the image is automatically rotated according to the EXIF data stored by the camera when the image
 *                           was taken. Set the angle to 'ignore' if you do not want the image to be automatically rotated.
 */

export const AUTO_RIGHT = 'auto_right';
export const AUTO_LEFT = 'auto_left';
export const VERTICAL_FLIP = 'vflip';
export const HORIZONTAL_FLIP = 'hflip';
export const IGNORE = 'ignore';
