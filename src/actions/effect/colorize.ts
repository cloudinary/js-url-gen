import SimpleEffectAction from "./EffectActions/SimpleEffectAction";


/**
 * @description Applies a colorizing filter to the asset.
 * @memberOf Actions.Effect
 * @param colorizeLevel
 */
function colorize(colorizeLevel?: number):SimpleEffectAction {
  return new SimpleEffectAction('colorize', colorizeLevel);
}

export default colorize;
