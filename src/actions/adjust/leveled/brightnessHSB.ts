import EffectActionWithLevel from "../../effect/EffectActions/EffectActionWithLevel";

/**
 * @memberOf Actions.Adjust
 * @description
 * Adjusts image brightness modulation in HSB to prevent artifacts in some images.
 * @param {number} level The level of modulation. (Range: -99 to 100, Server default: 80)
 */
function brightnessHSB(level?:number):EffectActionWithLevel {
  return new EffectActionWithLevel('brightness_hsb', level);
}

export default brightnessHSB;
