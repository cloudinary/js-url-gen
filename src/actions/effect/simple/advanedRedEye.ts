import EffectAction from "../EffectAction";

/**
 * @description
 * Removes red eyes with the Advanced Facial Attribute Detection add-on.
 * For details, see the Advanced Facial Attribute Detection add-on documentation.
 * @memberOf Actions.Effect
 */
function advancedRedEye():EffectAction {
  return new EffectAction('adv_redeye');
}

export default advancedRedEye;
