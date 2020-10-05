import EffectActionWithLevel from "../../effect/EffectActions/EffectActionWithLevel";
import EffectActionWithBlendPercentage from "../../effect/EffectActions/EffectActionWithBlendPercentage";

/**
 * @memberOf Actions.Adjust
 * @description
 * Adjusts the color balance and blends the result with the original image.
 * @param {number} blendPercentage How much to blend the adjusted color result, where 0 means only use the original and 100 means only use the adjusted color result. </br>
*                                  (Range: 0 to 100, Server default: 100)
 * @return {EffectActionWithBlendPercentage}
 */
function autoColor(blendPercentage?:number):EffectActionWithBlendPercentage {
  return new EffectActionWithBlendPercentage('auto_color', blendPercentage);
}

export default autoColor;
