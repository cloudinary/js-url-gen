import {prepareColor} from "../internal/utils/prepareColor";
import {BackgroundAutoBorderQualifier} from "./background/shared/auto/BackgroundAutoBorderQualifier";
import {BackgroundBorderGradientQualifier} from "./background/shared/gradient/BackgroundBorderGradientQualifier";
import {BackgroundAutoPredominantQualifier} from "./background/shared/auto/BackgroundAutoPredominantQualifier";
import {BackgroundPredominantGradientQualifier} from "./background/shared/gradient/BackgroundPredominantGradientQualifier";
import BlurredBackgroundAction from "./background/shared/BlurredBackgroundAction";
import {BackgroundQualifier} from "./background/shared/base/BackgroundQualifier";
import {SystemColors} from "./color";



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
 * @return {Values.Background.BackgroundQualifier}
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
 * @return {Values.Background.BackgroundQualifier}
 */
function color(colorStr: SystemColors): BackgroundQualifier {
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

const Background = {
  auto: auto,
  border: border,
  borderGradient: borderGradient,
  predominantGradient: predominantGradient,
  predominant: predominant,
  color: color,
  blurred: blurred
};

export {
  auto,
  border,
  borderGradient,
  predominantGradient,
  predominant,
  color,
  blurred,
  Background
};

