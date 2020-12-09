import {EffectActionWithStrength} from "../../effect/EffectActions/EffectActionWithStrength";

/**
 * @description Applies an unsharp mask filter to the image.
 * @memberOf Actions.Adjust
 * @param {number} strength The strength of the filter. (Range: 1 to 2000, Server default: 100)
 * @return {EffectActionWithStrength}
 */
function unsharpMask(strength?:number):EffectActionWithStrength {
  return new EffectActionWithStrength('unsharp_mask', strength);
}

export default unsharpMask;
