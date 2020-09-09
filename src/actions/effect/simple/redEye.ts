import EffectAction from "../EffectAction";

/**
 * @description Removes red eyes in the image.
 * @memberOf Actions.Effect
 */
function redEye():EffectAction {
  return new EffectAction('redeye');
}

export default redEye;
