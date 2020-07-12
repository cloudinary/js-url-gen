import EffectAction from "./EffectAction";
import {IEffectAction} from "./IEffectAction";


/**
 * @param blurLevel
 */
function blurFaces(blurLevel?: number):IEffectAction {
  return new EffectAction('blur_faces', blurLevel);
}

export default blurFaces;
