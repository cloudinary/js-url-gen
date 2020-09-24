import LeveledEffectAction from "../EffectActions/LeveledEffectAction";



class MakeTransparentEffectAction extends LeveledEffectAction {
  tolerance(value: number | string): this {
    return this.setLevel(value);
  }
}

/**
 * @description
 * Makes the background of the image transparent (or solid white for formats that do not support transparency).
 * The background is determined as all pixels that resemble the pixels on the edges of the image.
 *
 * @memberOf Actions.Effect
 * @param {number} tolerance The tolerance used to accommodate variance in the background color. (Range: 0 to 100, Server default: 10)
 * @return {MakeTransparentEffectAction}
 */
function makeTransparent(tolerance?: number):MakeTransparentEffectAction {
  return new MakeTransparentEffectAction('make_transparent', tolerance);
}

export default makeTransparent;
