import EffectAction from "./EffectAction";
import {IEffectAction} from "./IEffectAction";


/**
 * @description Pixelates all detected faces in the image.
 * @memberOf Actions.Effect
 * @param blurLevel
 */
function pixelateFaces(blurLevel?: number):IEffectAction {
  return new EffectAction('pixelate_faces', blurLevel);
}

export default pixelateFaces;
