import EffectAction from "./EffectAction";
import {IEffectAction} from "./IEffectAction";


/**
 * @description Applies a blurring filter to the asset.
 * @memberOf Actions.Effect
 * @param blurLevel
 */
function blur(blurLevel?: number):IEffectAction {
  return new EffectAction('blur', blurLevel);
}

export default blur;
