import EffectActionWithLevel from "../EffectActions/EffectActionWithLevel";


/**
 * @description Changes the color scheme of the image to sepia.
 * @memberOf Actions.Effect
 * @param {number} level The level of sepia to apply. (Range: 1 to 100, Server default: 80)
 */
function sepia(level?: number):EffectActionWithLevel {
  return new EffectActionWithLevel('sepia', level);
}

export default sepia;
