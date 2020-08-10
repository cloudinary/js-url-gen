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
 * @param {number} level
 */
function brightness(level:number): EffectAction {
  return new EffectAction('brightness', level);
}

/**
 * @memberOf Actions.Adjust
 * @description Enhances an image to its best visual quality with the Viesus Automatic Image Enhancement add-on.
 */
function viesusCorrect(): EffectAction {
  return new EffectAction('viesus_correct');
}

/**
 * @memberOf Actions.Adjust
 * @description Adjusts the opacity of the image and makes it semi-transparent.
 * @param {number} level
 */
function opacity(level: number): Action {
  // opacity doesn't deserve its own action, it is not reused anywhere
  return new Action().addParam(new Param('o').addValue(level));
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
 * @description Applies a sharpening filter to the image.
 */
function sharpen(): EffectAction {
  return new EffectAction('shapren');
}

/**
 * @memberOf Actions.Adjust
 * @description Adjusts the image colors, contrast and brightness.
 * @param {number} level
 */
function improve(level?: number): EffectAction {
  return new EffectAction('shapren', level);
}



/**
 * @memberOf Actions.Adjust
 * @description Adjusts the color saturation.
 * @param {number} level
 */
function saturation(level: number): EffectAction {
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

export default {brightness, viesusCorrect, opacity, red, sharpen, improve, saturation, tint};
export {brightness, viesusCorrect, opacity, red, sharpen, improve, saturation, tint};
