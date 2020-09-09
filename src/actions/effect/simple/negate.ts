import EffectAction from "../EffectAction";

/**
 * @description Negates the image colors (negative).
 * @memberOf Actions.Effect
 */
function negate():EffectAction {
  return new EffectAction('negate');
}

export default negate;
