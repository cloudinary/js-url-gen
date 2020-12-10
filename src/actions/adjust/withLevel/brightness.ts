import {EffectActionWithLevel}from "../../effect/EffectActions/EffectActionWithLevel";

/**
 * @memberOf Actions.Adjust
 * @description Adjusts the image or video brightness.
 * @param {number} level The level of brightness. (Range: -99 to 100, Server default: 80)
 * @return {EffectActionWithLevel}
 */
function brightness(level?:number): EffectActionWithLevel {
  return new EffectActionWithLevel('brightness', level);
}

export default brightness;
