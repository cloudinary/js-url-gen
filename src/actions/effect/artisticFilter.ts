import EffectAction from "./EffectAction";


/**
 * @description Applies an artistic filter to the asset.
 * @memberOf Actions.Effect
 * @param artisticFilterType
 */
function artisticFilter(artisticFilterType: string):EffectAction {
  return new EffectAction('art', artisticFilterType);
}

export default artisticFilter;
