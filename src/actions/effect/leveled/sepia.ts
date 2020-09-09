import EffectAction from "../EffectAction";


/**
 * @description Changes the color scheme of the image to sepia.
 * @memberOf Actions.Effect
 * @param {number} level The level of sepia to apply. (Range: 1 to 100, Server default: 80)
 */
function sepia(level?: number):EffectAction {
  return new EffectAction('sepia', level);
}

export default sepia;
