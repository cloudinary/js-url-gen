import EffectActionWithLevel from "../../effect/EffectActions/EffectActionWithLevel";


/**
 * @memberOf Actions.Adjust
 * @description Adjusts the image's red channel.
 * @param {number} level
 */
function red(level?:number): EffectActionWithLevel {
  return new EffectActionWithLevel('red', level);
}


export default red;
