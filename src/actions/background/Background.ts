/**
 * Defines the background color to use instead of transparent background areas or when resizing with padding.
 *
 * <b>Learn more:</b>
 * {@link https://cloudinary.com/documentation/image_transformations#setting_background_color | Setting background for images}
 * {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#background_color | Setting background for videos}
 * @memberOf Actions
 * @namespace Background
 */
import auto from "./auto";
import color from "./color"; // done, though color is a strange name
import predominant from "./predominant";
import border from "./border";
import blurred from "./blurred";

export {auto, color, predominant, border, blurred};
export default {auto, color, predominant, border, blurred};
