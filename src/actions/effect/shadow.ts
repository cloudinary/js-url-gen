import EffectAction from "./EffectAction";
import {IEffectAction} from "./IEffectAction";


/**
 * @description Applies a shadow filter to the asset.
 * @memberOf Actions.Effect
 * @param shadowLevel
 */
function shadow(shadowLevel?: number):IEffectAction {
  return new EffectAction('shadow', shadowLevel);
}

export default shadow;
