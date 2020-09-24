import EffectActionWithLevel from "../../effect/EffectActions/EffectActionWithLevel";

/**
 * @memberOf Actions.Adjust
 * @description
 * Applies a vibrance filter on the image.
 * @param {number} strength The strength of the vibrance. (Range: -100 to 100, Server default: 20)
 * @return {EffectActionWithLevel}
 */
function vibrance(strength?:number):EffectActionWithLevel {
  return new EffectActionWithLevel('vibrance', strength);
}

export default vibrance;
