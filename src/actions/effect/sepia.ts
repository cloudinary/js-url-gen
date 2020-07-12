import EffectAction from "./EffectAction";
import {IEffectAction} from "./IEffectAction";


/**
 * @param blurLevel
 */
function sepia(blurLevel?: number):IEffectAction {
  return new EffectAction('sepia', blurLevel);
}

export default sepia;
