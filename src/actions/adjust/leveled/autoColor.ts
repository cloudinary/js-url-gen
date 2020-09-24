import EffectActionWithLevel from "../../effect/EffectActions/EffectActionWithLevel";

/**
 * @memberOf Actions.Adjust
 * @description
 * Adjusts the color balance and blends the result with the original image.
 * @param {number} blendPercentage How much to blend the adjusted color result, where 0 means only use the original and 100 means only use the adjusted color result. </br>
*                                  (Range: 0 to 100, Server default: 100)
 * @return {EffectActionWithLevel}
 */
function autoColor(blendPercentage?:number):EffectActionWithLevel {
  return new EffectActionWithLevel('auto_color', blendPercentage);
}

export default autoColor;
