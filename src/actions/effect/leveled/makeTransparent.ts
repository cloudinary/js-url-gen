import EffectAction from "../EffectAction";



/**
 * @description
 * Makes the background of the image transparent (or solid white for formats that do not support transparency).
 * The background is determined as all pixels that resemble the pixels on the edges of the image.
 *
 * @memberOf Actions.Effect
 * @param {number} tolerance The tolerance used to accommodate variance in the background color. (Range: 0 to 100, Server default: 10)
 */
function makeTransparent(tolerance?: number):EffectAction {
  return new EffectAction('make_transparent', tolerance);
}

export default makeTransparent;
