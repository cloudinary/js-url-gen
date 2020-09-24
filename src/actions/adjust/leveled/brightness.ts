import EffectActionWithLevel from "../../effect/EffectActions/EffectActionWithLevel";

/**
 * @@doc
 * @memberOf Actions.Adjust
 * @description Adjusts the brightness and blends the result with the original image.
 * @param {number} level How much to blend the adjusted brightness, where 0 means only use the original and 100 means only use the adjusted brightness result.</br> (Range: 0 to 100, Server default: 100)
 * @return {EffectActionWithLevel}
 */
function brightness(level?:number): EffectActionWithLevel {
  return new EffectActionWithLevel('brightness', level);
}

export default brightness;
