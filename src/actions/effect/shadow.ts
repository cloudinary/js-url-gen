import EffectAction from "./EffectAction";


/**
 * @description Applies a shadow filter to the asset.
 * @memberOf Actions.Effect
 * @param shadowLevel
 */
function shadow(shadowLevel?: number):EffectAction {
  return new EffectAction('shadow', shadowLevel);
}

export default shadow;
