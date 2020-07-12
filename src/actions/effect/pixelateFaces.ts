import EffectAction from "./EffectAction";
import {IEffectAction} from "./IEffectAction";


/**
 * @param blurLevel
 */
function pixelateFaces(blurLevel?: number):IEffectAction {
  return new EffectAction('pixelate_faces', blurLevel);
}

export default pixelateFaces;
