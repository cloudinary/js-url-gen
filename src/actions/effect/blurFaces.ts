import EffectAction from "./EffectAction";
import {IEffectAction} from "./IEffectAction";


/**
 * @description Blurs all detected faces in the image.
 * @memberOf Actions.Effect
 * @param blurLevel
 */
function blurFaces(blurLevel?: number):IEffectAction {
  return new EffectAction('blur_faces', blurLevel);
}

export default blurFaces;
