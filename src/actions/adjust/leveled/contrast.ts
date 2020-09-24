import EffectActionWithLevel from "../../effect/EffectActions/EffectActionWithLevel";

/**
 * @@doc
 * @memberOf Actions.Adjust
 * @description
 * Adjusts the contrast.
 * @param {number} level How much to blend the adjusted contrast, where 0 means only use the original and 100 means only use the adjusted contrast result. (Range: 0 to 100, Server default: 100)
 * @return {EffectActionWithLevel}
 */
function contrast(level?:number):EffectActionWithLevel {
  return new EffectActionWithLevel('contrast', level);
}

export default contrast;
