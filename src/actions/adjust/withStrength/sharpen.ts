import EffectActionWithStrength from "../../effect/EffectActions/EffectActionWithStrength";

/**
 * @description Applies a sharpening filter to the image.
 * @memberOf Actions.Adjust
 * @param {number} strength The strength of the filter. (Range: 1 to 2000, Server default: 100)
 * @return {EffectActionWithStrength}
 */
function sharpen(strength?:number):EffectActionWithStrength {
  return new EffectActionWithStrength('sharpen', strength);
}

export default sharpen;
