import SimpleEffectAction from "../../effect/EffectActions/SimpleEffectAction";

/**
 * @memberOf Actions.Adjust
 * @description Enhances an image to its best visual quality with the Viesus Automatic Image Enhancement add-on.
 * For details, see the Viesus Automatic Image Enhancement add-on documentation.

 */
function viesusCorrect(): SimpleEffectAction {
  return new SimpleEffectAction('viesus_correct');
}

export default viesusCorrect;
