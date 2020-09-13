import EffectAction from "../EffectAction";

/**
 * @description Converts the image to gray-scale (multiple shades of gray).
 * @memberOf Actions.Effect
 */
function grayscale():EffectAction {
  return new EffectAction('grayscale');
}

export default grayscale;
