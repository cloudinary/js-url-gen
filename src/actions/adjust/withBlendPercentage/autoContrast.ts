import EffectActionWithLevel from "../../effect/EffectActions/EffectActionWithLevel";
import EffectActionWithBlendPercentage from "../../effect/EffectActions/EffectActionWithBlendPercentage";

/**
 * @memberOf Actions.Adjust
 * @description
 * Adjusts the contrast and blends the result with the original image.
 * @param {number} blendPercentage How much to blend the adjusted contrast, where 0 means only use the original
 *                 and 100 means only use the adjusted contrast result.
 *                (Range: 0 to 100, Server default: 100)
 * @return {EffectActionWithBlendPercentage}
 */
function autoContrast(blendPercentage?:number):EffectActionWithBlendPercentage {
  return new EffectActionWithBlendPercentage('auto_contrast', blendPercentage);
}

export default autoContrast;
