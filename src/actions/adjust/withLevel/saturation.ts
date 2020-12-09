import {EffectActionWithLevel}from "../../effect/EffectActions/EffectActionWithLevel";

/**
 * @memberOf Actions.Adjust
 * @description Adjusts the color saturation.
 * @param {number} level The level of color saturation (Range: -100 to 100, Server default: 80).
 * @return {EffectActionWithLevel}
 */
function saturation(level?:number):EffectActionWithLevel {
  return new EffectActionWithLevel('saturation', level);
}

export default saturation;
