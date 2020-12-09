import {EffectActionWithLevel}from "../../effect/EffectActions/EffectActionWithLevel";


/**
 * @memberOf Actions.Adjust
 * @description Adjusts the image's green channel.
 * @param {number} level The level of green. (Range: -100 to 100, Server default: 0)
 * @return {EffectActionWithLevel}
 */
function green(level?:number): EffectActionWithLevel {
  return new EffectActionWithLevel('green', level);
}

export default green;
