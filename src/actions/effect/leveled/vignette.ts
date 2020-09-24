import EffectActionWithLevel from "../EffectActions/EffectActionWithLevel";


/**
 * @description Applies a vignette effect.
 * @memberOf Actions.Effect
 * @param {number} strength The strength of the vignette. (Range: 0 to 100, Server default: 20)
 * @return {EffectActionWithLevel}
 */
function vignette(strength?: number):EffectActionWithLevel {
  return new EffectActionWithLevel('vignette', strength);
}

export default vignette;
