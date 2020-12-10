import {EffectActionWithBlendPercentage} from "../../effect/EffectActions/EffectActionWithBlendPercentage";

/**
 * @memberOf Actions.Adjust
 * @description
 * Adjusts the brightness and blends the result with the original image.
 * @param {number} blendPercentage How much to blend the adjusted brightness, where 0 means only use the original
 *                 and 100 means only use the adjusted brightness result.
 *                 (Range: 0 to 100, Server default: 100)
 * @return {EffectActionWithBlendPercentage}
 */
function autoBrightness(blendPercentage?:number):EffectActionWithBlendPercentage {
  return new EffectActionWithBlendPercentage('auto_brightness', blendPercentage);
}

export default autoBrightness;
