import EffectActionWithLevel from "../../effect/EffectActions/EffectActionWithLevel";


/**
 * @memberOf Actions.Adjust
 * @description Applies a sharpening filter to the image.
 * @param {number} strength The strength of the filter. (Range: 1 to 2000, Server default: 100)
 * @return {EffectActionWithLevel}
 */
function sharpen(strength?:number):EffectActionWithLevel {
  return new EffectActionWithLevel('sharpen', strength);
}

export default sharpen;
