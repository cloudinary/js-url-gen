import SimpleEffectAction from "../EffectActions/SimpleEffectAction";

/**
 * @description Negates the image colors (negative).
 * @memberOf Actions.Effect
 * @return {SimpleEffectAction}
 */
function negate():SimpleEffectAction {
  return new SimpleEffectAction('negate');
}

export default negate;
