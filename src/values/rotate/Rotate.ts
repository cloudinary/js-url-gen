/**
 * @memberOf Values
 * @namespace RotationMode
 */

/**
 * @description Rotate image 90 degrees clockwise only if the requested aspect ratio does not match the image's aspect ratio.
 * @memberOf Values.RotationMode
 * @return {string}
 */
export function autoRight():string { return 'auto_right'; }

/**
 * @description Rotate image 90 degrees counterclockwise only if the requested aspect ratio does not match the image's aspect ratio.
 * @memberOf Values.RotationMode
 * @return {string}
 */
export function autoLeft():string { return 'auto_left'; }

/**
 * @description Vertical mirror flip of the image.
 * @memberOf Values.RotationMode
 * @return {string}
 */
export function verticalFlip():string { return 'vflip'; }

/**
 * @description Horizontal mirror flip of the image.
 * @memberOf Values.RotationMode
 * @return {string}
 */
export function horizontalFlip():string { return 'hflip'; }


/**
 * @description By default, the image is automatically rotated according to the EXIF data stored by the camera when the image
 *                           was taken. Set the angle to 'ignore' if you do not want the image to be automatically rotated.
 * @memberOf Values.RotationMode
 * @return {string}
 */
export function ignore():string { return 'ignore'; }


