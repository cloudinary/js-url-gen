import SimpleEffectAction from "../EffectActions/SimpleEffectAction";

/**
 * @description
 * Removes red eyes with the Advanced Facial Attribute Detection add-on.
 * For details, see the Advanced Facial Attribute Detection add-on documentation.
 * @memberOf Actions.Effect
 * @return {SimpleEffectAction}
 */
function advancedRedEye():SimpleEffectAction {
  return new SimpleEffectAction('adv_redeye');
}

export default advancedRedEye;
