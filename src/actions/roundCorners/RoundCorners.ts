/**
 * @description Round one or more corners of an image or video.
 *
 * <b>Learn more:</b>
 * {@link https://cloudinary.com/documentation/image_transformations#rounding_corners_and_creating_circular_images | Rounded images}
 * {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#rounding_corners_and_creating_circular_videos | Rounded videos}
 * @memberOf Actions
 * @namespace RoundCorners
 */

import byRadius from './byRadius';
import max from './max';

export {byRadius, max};
export default {
  byRadius,
  max
};
