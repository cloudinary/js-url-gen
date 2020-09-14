import EffectActionWithLevel from "../EffectActions/EffectActionWithLevel";


/**
 * @description Applies a blurring filter to the asset.
 * @memberOf Actions.Effect
 * @param {number} blurLevel The strength of the blur. (Range: 1 to 2000, Server default: 100)
 */
function blur(blurLevel?: number):EffectActionWithLevel {
  return new EffectActionWithLevel('blur', blurLevel);
}

export default blur;
