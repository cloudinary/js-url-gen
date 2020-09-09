import EffectAction from "../EffectAction";


/**
 * @description Applies a vignette effect.
 * @memberOf Actions.Effect
 * @param {number} strength The strength of the vignette. (Range: 0 to 100, Server default: 20)
 */
function vignette(strength?: number):EffectAction {
  return new EffectAction('vignette', strength);
}

export default vignette;
