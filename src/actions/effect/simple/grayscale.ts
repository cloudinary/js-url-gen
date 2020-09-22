import SimpleEffectAction from "../EffectActions/SimpleEffectAction";

/**
 * @description Converts the image to gray-scale (multiple shades of gray).
 * @memberOf Actions.Effect
 * @return {SimpleEffectAction}
 */
function grayscale():SimpleEffectAction {
  return new SimpleEffectAction('grayscale');
}

export default grayscale;
