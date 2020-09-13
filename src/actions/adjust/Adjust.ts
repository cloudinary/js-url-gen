import Action from "../Action";
import Param from "../../parameters/Param";
import FillLightAction from "./FillLightAction";
import RecolorAction from "./RecolorAction";
import ImproveAction from "./ImproveAction";
import ReplaceColorAction from "./ReplaceColorAction";
import SimpleEffectAction from "../effect/EffectActions/SimpleEffectAction";


/**
 * Adjusts the visual appearance of an image or video.
 * @memberOf Actions
 * @namespace Adjust
 */

/**
 * @memberOf Actions.Adjust
 * @description Adjusts the brightness.
 * @param {number} level The level of brightness (Range: -99 to 100, Server default: 80)
 */
function brightness(level?:number): SimpleEffectAction {
  return new SimpleEffectAction('brightness', level);
}

/**
 * @memberOf Actions.Adjust
 * @description Enhances an image to its best visual quality with the Viesus Automatic Image Enhancement add-on.
 * For details, see the Viesus Automatic Image Enhancement add-on documentation.

 */
function viesusCorrect(): SimpleEffectAction {
  return new SimpleEffectAction('viesus_correct');
}

/**
 * @memberOf Actions.Adjust
 * @description Adjusts the opacity of the image and makes it semi-transparent.
 * @param {number} level
 */
function opacity(level:number): Action {
  // opacity doesn't deserve its own action, it is not reused anywhere
  return new Action().addParam(new Param('o').addValue(level));
}

/**
 * @memberOf Actions.Adjust
 * @description  Causes all semi-transparent pixels in an image to be either fully transparent or fully opaque.
 *
 * Each pixel with an opacity lower than the specified threshold value is set to an opacity of 0%. Each pixel with
 * an opacity greater than the specified threshold is set to an opacity of 100%. For example, setting
 * opacity_threshold:0 makes all pixels non-transparent, while opacity_threshold:100 makes all semi-transparent
 * pixels fully transparent. Note: This effect can be a useful solution when PhotoShop PSD files are delivered in a
 * format supporting partial transparency, such as PNG, and the results without this effect are not as expected.
 *
 * @param {number} level The level of the threshold. (Range: 1 to 100, Server default: 50)
 */
function opacityThreshold(level?:number): SimpleEffectAction {
  return new SimpleEffectAction('opacity_threshold', level);
}


/**
 * @memberOf Actions.Adjust
 * @description Adjusts the image's red channel.
 * @param {number} level
 */
function red(level:number): SimpleEffectAction {
  return new SimpleEffectAction('red', level);
}

/**
 * @memberOf Actions.Adjust
 * @description Adjusts the image's green channel.
 * @param {number} level
 */
function green(level:number): SimpleEffectAction {
  return new SimpleEffectAction('green', level);
}

/**
 * @memberOf Actions.Adjust
 * @description Adjusts the image's blue channel.
 * @param {number} level
 */
function blue(level:number): SimpleEffectAction {
  return new SimpleEffectAction('blue', level);
}

/**
 * @memberOf Actions.Adjust
 * @description Applies a sharpening filter to the image.
 * @param {number} strength The strength of the filter. (Range: 1 to 2000, Server default: 100)
 */
function sharpen(strength?:number):SimpleEffectAction {
  return new SimpleEffectAction('sharpen', strength);
}

/**
 * @memberOf Actions.Adjust
 * @description Applies an unsharp mask filter to the image.
 * @param {number} strength The strength of the filter. (Range: 1 to 2000, Server default: 100)
 */
function unsharpMask(strength?:number):SimpleEffectAction {
  return new SimpleEffectAction('unsharp_mask', strength);
}

/**
 * @memberOf Actions.Adjust
 * @description Defines how to improve an image by automatically adjusting image colors, contrast and brightness.</br>
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/image_transformations#image_improvement_effects | Image improvement effects}
 */
function improve(): ImproveAction {
  return new ImproveAction();
}

/**
 * @memberOf Actions.Adjust
 * @description Adjusts the color saturation.
 * @param {number} level. The level of color saturation (Range: -100 to 100, Server default: 80).
 */
function saturation(level?:number):SimpleEffectAction {
  return new SimpleEffectAction('saturation', level);
}

/**
 * @memberOf Actions.Adjust
 * @description
 * Adjusts the contrast.
 * @param {number} level The level of contrast (Range: -100 to 100, Server default: 0)
 */
function contrast(level?:number):SimpleEffectAction {
  return new SimpleEffectAction('contrast', level);
}

/**
 * @memberOf Actions.Adjust
 * @description
 * Adjusts the gamma level
 * @param {number} level The level of gamma (Range: -50 to 150, Server default: 0).
 */
function gamma(level?:number):SimpleEffectAction {
  return new SimpleEffectAction('gamma', level);
}

/**
 * @memberOf Actions.Adjust
 * @description
 * Adjusts image brightness modulation in HSB to prevent artifacts in some images.
 * @param {number} level The level of modulation. (Range: -99 to 100, Server default: 80)
 */
function brightnessHSB(level?:number):SimpleEffectAction {
  return new SimpleEffectAction('brightness_hsb', level);
}

/**
 * @memberOf Actions.Adjust
 * @description
 * Adjusts the image's hue.
 * @param {number} level The level of hue. (Range: -100 to 100, Server default: 80)
 */
function hue(level?:number):SimpleEffectAction {
  return new SimpleEffectAction('hue', level);
}

/**
 * @memberOf Actions.Adjust
 * @description
 * Adjusts the brightness and blends the result with the original image.
 * @param {number} blendPercentage How much to blend the adjusted brightness, where 0 means only use the original
 *                 and 100 means only use the adjusted brightness result.
 *                 (Range: 0 to 100, Server default: 100)
 */
function autoBrightness(blendPercentage?:number):SimpleEffectAction {
  return new SimpleEffectAction('auto_brightness', blendPercentage);
}

/**
 * @memberOf Actions.Adjust
 * @description
 * Adjusts the color balance and blends the result with the original image.
 * @param {number} blendPercentage How much to blend the adjusted brightness, where 0 means only use the original
 *                 and 100 means only use the adjusted color result.
 *                 (Range: 0 to 100, Server default: 100)
 */
function autoColor(blendPercentage?:number):SimpleEffectAction {
  return new SimpleEffectAction('auto_color', blendPercentage);
}

/**
 * @memberOf Actions.Adjust
 * @description
 * Adjusts the contrast and blends the result with the original image.
 * @param {number} blendPercentage How much to blend the adjusted contrast, where 0 means only use the original
 *                 and 100 means only use the adjusted contrast result.
 *                (Range: 0 to 100, Server default: 100)
 */
function autoContrast(blendPercentage?:number):SimpleEffectAction {
  return new SimpleEffectAction('auto_contrast', blendPercentage);
}

/**
 * @memberOf Actions.Adjust
 * @description
 * Applies a vibrance filter on the image.
 * @param {number} strength The strength of the vibrance. (Range: -100 to 100, Server default: 20)
 */
function vibrance(strength?:number):SimpleEffectAction {
  return new SimpleEffectAction('vibrance', strength);
}


/**
 * Maps an input color and those similar to the input color to corresponding shades of a specified output color, taking luminosity and chroma into account, in order to recolor an object in a natural way.</br>
 * More highly saturated input colors usually give the best results. It is recommended to avoid input colors approaching white, black, or gray.
 * @param {string} toColor
 */
function replaceColor(toColor:string): ReplaceColorAction {
  return new ReplaceColorAction(toColor);
}

/**
 * @description Converts the colors of every pixel in an image based on the supplied color matrix, in which the value of each color channel is calculated based on the values from all other channels (e.g. a 3x3 matrix for RGB, a 4x4 matrix for RGBA or CMYK, etc).</br>
 * For every pixel in the image, take each color channel and adjust its value by the specified values of the matrix to get a new value.
 * @param {number[][]} matrix
 */
function recolor(matrix:number[][]): RecolorAction {
  return new RecolorAction(matrix);
}

/**
 * @description Adjusts the fill light and blends the result with the original image.
 */
function fillLight(): FillLightAction {
  return new FillLightAction();
}


export default {brightness, viesusCorrect, opacity, red, sharpen, improve, saturation,
  contrast, gamma, green, blue, brightnessHSB, hue, autoBrightness, autoColor,
  autoContrast, vibrance, unsharpMask, opacityThreshold, replaceColor, recolor, fillLight};

export {brightness, viesusCorrect, opacity, red, sharpen, improve, saturation,
  contrast, gamma, green, blue, brightnessHSB, hue, autoBrightness, autoColor,
  autoContrast, vibrance, unsharpMask, opacityThreshold, replaceColor, recolor, fillLight};
