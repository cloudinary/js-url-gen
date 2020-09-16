import EffectActionWithLevel from "../../effect/EffectActions/EffectActionWithLevel";

/**
 * @memberOf Actions.Adjust
 * @description
 * Adjusts the image's hue.
 * @param {number} level The level of hue. (Range: -100 to 100, Server default: 80)
 */
function hue(level?:number):EffectActionWithLevel {
  return new EffectActionWithLevel('hue', level);
}


export default hue;
