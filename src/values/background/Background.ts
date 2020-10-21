import {prepareColor} from "../../utils/prepareColor";
import {BackgroundAutoBorderQualifier} from "./shared/auto/BackgroundAutoBorderQualifier";
import {BackgroundBorderGradientQualifier} from "./shared/gradient/BackgroundBorderGradientQualifier";
import {BackgroundAutoPredominantQualifier} from "./shared/auto/BackgroundAutoPredominantQualifier";
import {BackgroundPredominantGradientQualifier} from "./shared/gradient/BackgroundPredominantGradientQualifier";
import BlurredBackgroundAction from "./shared/BlurredBackgroundAction";
import {BackgroundQualifier} from "./shared/base/BackgroundQualifier";



/**
 * @description Defines the background color to use instead of transparent background areas or when resizing with padding.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/image_transformations#setting_background_color|Setting background for images} | {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#background_color|Setting background for videos}
 *
 * @namespace Background
 * @memberOf Values
 */



/**
 * @description Selects the predominant color while taking only the image border pixels into account.
 * @memberOf Values.Background
 * @return {BackgroundAutoBorderQualifier}
 */
function border(): BackgroundAutoBorderQualifier{
  return new BackgroundAutoBorderQualifier();
}

/**
 * @description Automatically determines the color to use for padding, if needed when resizing an asset.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/image_transformations#content_aware_padding|Content-aware padding}
 * @memberOf Values.Background
 * @return {BackgroundQualifier}
 */
function auto(): BackgroundQualifier{
  return new BackgroundQualifier('auto');
}

/**
 * @description Applies a padding gradient fade effect using the predominant colors in the border of the image.
 * @memberOf Values.Background
 * @return {BackgroundBorderGradientQualifier}
 */
function borderGradient(): BackgroundBorderGradientQualifier {
  return new BackgroundBorderGradientQualifier();
}

/**
 * @description Applies a padding gradient fade effect using the predominant colors in the image.
 * @memberOf Values.Background
 * @return {BackgroundPredominantGradientQualifier}
 */
function predominantGradient(): BackgroundPredominantGradientQualifier {
  return new BackgroundPredominantGradientQualifier();
}

/**
 * @description Selects the predominant color while taking all pixels in the image into account
 * @memberOf Values.Background
 * @return {BackgroundAutoPredominantQualifier}
 */
function predominant(): BackgroundAutoPredominantQualifier {
  return new BackgroundAutoPredominantQualifier();
}

/**
 * @description Selects the predominant color while taking all pixels in the image into account.
 * @memberOf Values.Background
 * @return {BackgroundQualifier}
 */
function color(colorStr: string): BackgroundQualifier {
  return new BackgroundQualifier(prepareColor(colorStr));
}

/**
 * @description Selects the predominant color while taking all pixels in the image into account.
 * @memberOf Values.Background
 * @return {BlurredBackgroundAction}
 */
function blurred(): BlurredBackgroundAction {
  return new BlurredBackgroundAction();
}

export {
  auto,
  border,
  borderGradient,
  predominantGradient,
  predominant,
  color,
  blurred
};

export default {
  auto,
  border,
  borderGradient,
  predominantGradient,
  predominant,
  color,
  blurred
};
