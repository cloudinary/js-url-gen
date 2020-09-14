import SimpleEffectAction from "../EffectActions/SimpleEffectAction";

/**
 * @description Converts the image to black and white.
 * @memberOf Actions.Effect
 */
function blackWhite():SimpleEffectAction {
  return new SimpleEffectAction('blackwhite');
}

export default blackWhite;
