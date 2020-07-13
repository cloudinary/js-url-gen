import EffectAction from "./EffectAction";
import {IEffectAction} from "./IEffectAction";


/**
 * @memberOf Effect
 * @param blurLevel
 */
function blur(blurLevel?: number):IEffectAction {
  return new EffectAction('blur', blurLevel);
}

export default blur;
