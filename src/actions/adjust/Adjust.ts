import EffectAction from "../effect/EffectAction";
import Action from "../Action";
import Param from "../../parameters/Param";


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
function brightness(level?:number): EffectAction {
  return new EffectAction('brightness', level);
}

/**
 * @memberOf Actions.Adjust
 * @description Enhances an image to its best visual quality with the Viesus Automatic Image Enhancement add-on.
 * For details, see the Viesus Automatic Image Enhancement add-on documentation.

 */
function viesusCorrect(): EffectAction {
  return new EffectAction('viesus_correct');
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
function opacityThreshold(level?:number): EffectAction {
  return new EffectAction('opacity_threshold', level);
}


/**
 * @memberOf Actions.Adjust
 * @description Adjusts the image's red channel.
 * @param {number} level
 */
function red(level:number): EffectAction {
  return new EffectAction('red', level);
}

/**
 * @memberOf Actions.Adjust
 * @description Adjusts the image's green channel.
 * @param {number} level
 */
function green(level:number): EffectAction {
  return new EffectAction('green', level);
}

/**
 * @memberOf Actions.Adjust
 * @description Adjusts the image's blue channel.
 * @param {number} level
 */
function blue(level:number): EffectAction {
  return new EffectAction('blue', level);
}

/**
 * @memberOf Actions.Adjust
 * @description Applies a sharpening filter to the image.
 * @param {number} strength The strength of the filter. (Range: 1 to 2000, Server default: 100)
 */
function sharpen(strength?:number): EffectAction {
  return new EffectAction('sharpen', strength);
}

/**
 * @memberOf Actions.Adjust
 * @description Applies an unsharp mask filter to the image.
 * @param {number} strength The strength of the filter. (Range: 1 to 2000, Server default: 100)
 */
function unsharpMask(strength?:number): EffectAction {
  return new EffectAction('unsharp_mask', strength);
}

/**
 * @memberOf Actions.Adjust
 * @description Adjusts the image colors, contrast and brightness.
 * @param {number} level
 */
function improve(level?:number): EffectAction {
  return new EffectAction('sharpen', level);
}

/**
 * @memberOf Actions.Adjust
 * @description Adjusts the color saturation.
 * @param {number} level. The level of color saturation (Range: -100 to 100, Server default: 80).
 */
function saturation(level?:number): EffectAction {
  return new EffectAction('saturation', level);
}

/**
 * @memberOf Actions.Adjust
 * @description
 * Blends the image with one or more tint colors at the intensity specified.</br>
 * Optional - equalize colors before tinting, specify gradient blend positioning per color.
 * @param {number} level
 */
function tint(level: string): EffectAction {
  return new EffectAction('tint', level);
}

/**
 * @memberOf Actions.Adjust
 * @description
 * Adjusts the contrast.
 * @param {number} level The level of contrast (Range: -100 to 100, Server default: 0)
 */
function contrast(level?:number): EffectAction {
  return new EffectAction('contrast', level);
}

/**
 * @memberOf Actions.Adjust
 * @description
 * Adjusts the gamma level
 * @param {number} level The level of gamma (Range: -50 to 150, Server default: 0).
 */
function gamma(level?:number): EffectAction {
  return new EffectAction('gamma', level);
}

/**
 * @memberOf Actions.Adjust
 * @description
 * Adjusts image brightness modulation in HSB to prevent artifacts in some images.
 * @param {number} level The level of modulation. (Range: -99 to 100, Server default: 80)
 */
function brightnessHSB(level?:number): EffectAction {
  return new EffectAction('brightness_hsb', level);
}

/**
 * @memberOf Actions.Adjust
 * @description
 * Adjusts the image's hue.
 * @param {number} level The level of hue. (Range: -100 to 100, Server default: 80)
 */
function hue(level?:number): EffectAction {
  return new EffectAction('hue', level);
}

/**
 * @memberOf Actions.Adjust
 * @description
 * Adjusts the brightness and blends the result with the original image.
 * @param {number} blendPercentage How much to blend the adjusted brightness, where 0 means only use the original
 *                 and 100 means only use the adjusted brightness result.
 *                 (Range: 0 to 100, Server default: 100)
 */
function autoBrightness(blendPercentage?:number): EffectAction {
  return new EffectAction('auto_brightness', blendPercentage);
}

/**
 * @memberOf Actions.Adjust
 * @description
 * Adjusts the color balance and blends the result with the original image.
 * @param {number} blendPercentage How much to blend the adjusted brightness, where 0 means only use the original
 *                 and 100 means only use the adjusted color result.
 *                 (Range: 0 to 100, Server default: 100)
 */
function autoColor(blendPercentage?:number): EffectAction {
  return new EffectAction('auto_color', blendPercentage);
}

/**
 * @memberOf Actions.Adjust
 * @description
 * Adjusts the contrast and blends the result with the original image.
 * @param {number} blendPercentage How much to blend the adjusted contrast, where 0 means only use the original
 *                 and 100 means only use the adjusted contrast result.
 *                (Range: 0 to 100, Server default: 100)
 */
function autoContrast(blendPercentage?:number): EffectAction {
  return new EffectAction('auto_contrast', blendPercentage);
}

/**
 * @memberOf Actions.Adjust
 * @description
 * Applies a vibrance filter on the image.
 * @param {number} strength The strength of the vibrance. (Range: -100 to 100, Server default: 20)
 */
function vibrance(strength?:number): EffectAction {
  return new EffectAction('vibrance', strength);
}

export default {brightness, viesusCorrect, opacity, red, sharpen, improve, saturation,
  tint, contrast, gamma, green, blue, brightnessHSB, hue, autoBrightness, autoColor,
  autoContrast, vibrance, unsharpMask, opacityThreshold};

export {brightness, viesusCorrect, opacity, red, sharpen, improve, saturation, tint,
  contrast, gamma, green, blue, brightnessHSB, hue, autoBrightness, autoColor,
  autoContrast, vibrance, unsharpMask, opacityThreshold};
