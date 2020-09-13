import EffectActionWithLevel from "../../effect/EffectActions/EffectActionWithLevel";

/**
 * @memberOf Actions.Adjust
 * @description
 * Adjusts the gamma level
 * @param {number} level The level of gamma (Range: -50 to 150, Server default: 0).
 */
function gamma(level?:number):EffectActionWithLevel {
  return new EffectActionWithLevel('gamma', level);
}

export default gamma;
