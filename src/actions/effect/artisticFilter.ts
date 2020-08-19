import EffectAction from "./EffectAction";
import {IEffectAction} from "./IEffectAction";


/**
 * @description Applies a artistic filter to the asset.
 * @memberOf Actions.Effect
 * @param artisticFilterType
 */
function artisticFilter(artisticFilterType: string):IEffectAction {
  return new EffectAction(artisticFilterType);
}

export default artisticFilter;
