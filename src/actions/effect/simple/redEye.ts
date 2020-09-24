import SimpleEffectAction from "../EffectActions/SimpleEffectAction";

/**
 * @description Removes red eyes in the image.
 * @memberOf Actions.Effect
 * @return {SimpleEffectAction}
 */
function redEye():SimpleEffectAction {
  return new SimpleEffectAction('redeye');
}

export default redEye;
