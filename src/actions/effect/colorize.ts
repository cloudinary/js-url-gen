import EffectAction from "./EffectAction";
import {IEffectAction} from "./IEffectAction";


/**
 * @description Applies a colorizing filter to the asset.
 * @memberOf Actions.Effect
 * @param colorizeLevel
 */
function colorize(colorizeLevel?: number):IEffectAction {
  return new EffectAction('colorize', colorizeLevel);
}

export default colorize;
