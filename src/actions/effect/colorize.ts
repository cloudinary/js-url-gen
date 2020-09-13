import EffectAction from "./EffectAction";


/**
 * @description Applies a colorizing filter to the asset.
 * @memberOf Actions.Effect
 * @param colorizeLevel
 */
function colorize(colorizeLevel?: number):EffectAction {
  return new EffectAction('colorize', colorizeLevel);
}

export default colorize;
