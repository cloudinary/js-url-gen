import EffectActionWithLevel from "../../effect/EffectActions/EffectActionWithLevel";

/**
 * @memberOf Actions.Adjust
 * @description Adjusts the image's blue channel.
 * @param {number} level
 * @return {EffectActionWithLevel}
 */
function blue(level?:number): EffectActionWithLevel {
  return new EffectActionWithLevel('blue', level);
}

export default blue;
