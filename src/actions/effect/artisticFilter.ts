import EffectAction from "./EffectAction";
import {IEffectAction} from "./IEffectAction";


/**
 * @description Applies an artistic filter to the asset.
 * @memberOf Actions.Effect
 * @param artisticFilterType
 */
function artisticFilter(artisticFilterType: string):IEffectAction {
  return new EffectAction('art', artisticFilterType);
}

export default artisticFilter;
