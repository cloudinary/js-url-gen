import {EffectActionWithLevel}from "../../effect/EffectActions/EffectActionWithLevel";

/**
 * @memberOf Actions.Adjust
 * @description Adjusts the image or video contrast.
 * @param {number} level The level of contrast. (Range: -100 to 100, Server default: 0)
 * @return {EffectActionWithLevel}
 */
function contrast(level?:number):EffectActionWithLevel {
  return new EffectActionWithLevel('contrast', level);
}

export default contrast;
