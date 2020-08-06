import EffectAction from "./EffectAction";
import {IEffectAction} from "./IEffectAction";

/**
 * @description Converts the image to gray-scale (multiple shades of gray).
 * @memberOf Actions.Effect
 * @param blurLevel
 */
function grayscale(blurLevel?: number):IEffectAction {
  return new EffectAction('grayscale', blurLevel);
}

export default grayscale;
