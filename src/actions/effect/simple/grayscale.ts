import SimpleEffectAction from "../EffectActions/SimpleEffectAction";

/**
 * @description Converts the image to gray-scale (multiple shades of gray).
 * @memberOf Actions.Effect
 */
function grayscale():SimpleEffectAction {
  return new SimpleEffectAction('grayscale');
}

export default grayscale;
