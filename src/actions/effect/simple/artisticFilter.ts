import SimpleEffectAction from "../EffectActions/SimpleEffectAction";

/**
 * @description Applies an artistic filter to the asset.
 * @memberOf Actions.Effect
 * @param artisticFilterType
 * @return {SimpleEffectAction}
 */
function artisticFilter(artisticFilterType: string):SimpleEffectAction {
  return new SimpleEffectAction('art', artisticFilterType);
}

export default artisticFilter;
