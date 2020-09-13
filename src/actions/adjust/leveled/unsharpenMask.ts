import EffectActionWithLevel from "../../effect/EffectActions/EffectActionWithLevel";

/**
 * @memberOf Actions.Adjust
 * @description Applies an unsharp mask filter to the image.
 * @param {number} strength The strength of the filter. (Range: 1 to 2000, Server default: 100)
 */
function unsharpMask(strength?:number):EffectActionWithLevel {
  return new EffectActionWithLevel('unsharp_mask', strength);
}

export default unsharpMask;
