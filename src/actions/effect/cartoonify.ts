import EffectAction from "./EffectAction";
import {IEffectAction} from "./IEffectAction";


/**
 * @description Applies a cartoonify filter to the asset.
 * @memberOf Actions.Effect
 * @param cartoonifyLevel
 */
function cartoonify(cartoonifyLevel?: number):IEffectAction {
  return new EffectAction('cartoonify', cartoonifyLevel);
}

export default cartoonify;
