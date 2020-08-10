import EffectAction from "./EffectAction";
import {IEffectAction} from "./IEffectAction";


/**
 * @description Changes the color scheme of the image to sepia.
 * @memberOf Actions.Effect
 * @param blurLevel
 */
function sepia(blurLevel?: number):IEffectAction {
  return new EffectAction('sepia', blurLevel);
}

export default sepia;
