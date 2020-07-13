import EffectAction from "./EffectAction";
import {IEffectAction} from "./IEffectAction";


/**
 * @memberOf Effect
 * @param blurLevel
 */
function blurFaces(blurLevel?: number):IEffectAction {
  return new EffectAction('blur_faces', blurLevel);
}

export default blurFaces;
