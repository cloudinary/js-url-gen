import {EffectActionWithLevel}from "../../effect/EffectActions/EffectActionWithLevel";


/**
 * @memberOf Actions.Adjust
 * @description Adjusts the image's red channel.
 * @param {number} level The level of red. (Range: -100 to 100, Server default: 0)
 * @return {EffectActionWithLevel}
 */
function red(level?:number): EffectActionWithLevel {
  return new EffectActionWithLevel('red', level);
}


export default red;
