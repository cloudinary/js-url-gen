import '../../interfaces/IAction';
import RoundCornersAction from "./RoundCornersAction";

/**
 * @memberOf Actions.RoundCorners
 * @description Rounds the specified corners of an image or a video by specifying 1-4 pixel values as follows:
 *
 * **Learn more**:
 * <a href=https://cloudinary.com/documentation/image_transformations#rounding_corners_and_creating_circular_images
 * target="_blank">Rounded images</a> |
 * <a href=
 * https://cloudinary.com/documentation/video_manipulation_and_delivery#rounding_corners_and_creating_circular_videos
 * target="_blank">Rounded videos</a>
 * @param {number} a
 * @param {number} [b];
 * @param {number} [c];
 * @param {number} [d];
 * @return {RoundCornersAction}
 */
function byRadius(a:number, b?:number, c?:number, d?:number):RoundCornersAction {
  return new RoundCornersAction().radius(a, b, c, d);
}

export default byRadius;
