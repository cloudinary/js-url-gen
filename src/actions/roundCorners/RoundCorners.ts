/**
 * Round one or more corners of an image or video.
 * @description
 * Round one or more corners of an image or video.
 *
 * **Learn more**:
 * <a href=https://cloudinary.com/documentation/image_transformations#rounding_corners_and_creating_circular_images
 * target="_blank">Rounded images</a> |
 * <a href=
 * https://cloudinary.com/documentation/video_manipulation_and_delivery#rounding_corners_and_creating_circular_videos
 * target="_blank">Rounded videos</a>
 *
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
