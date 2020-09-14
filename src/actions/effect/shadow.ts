import SimpleEffectAction from "./EffectActions/SimpleEffectAction";


/**
 * @description Applies a shadow filter to the asset.
 * @memberOf Actions.Effect
 * @param shadowLevel
 */
function shadow(shadowLevel?: number):SimpleEffectAction {
  return new SimpleEffectAction('shadow', shadowLevel);
}

export default shadow;
