import EffectAction from "./EffectAction";
import {IEffectAction} from "./IEffectAction";


/**
 * @param blurLevel
 */
function grayscale(blurLevel?: number):IEffectAction {
  return new EffectAction('grayscale', blurLevel);
}

export default grayscale;
