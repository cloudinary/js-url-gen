import LeveledEffectAction from "../EffectActions/LeveledEffectAction";
import Qualifier from "../../../qualifier/Qualifier";
import QualifierValue from "../../../qualifier/QualifierValue";
import {prepareColor} from "../../../utils/prepareColor";

/**
 * @class MakeTransparentEffectAction
 * @augments LeveledEffectAction
 * @description Makes the background of the image transparent (or solid white for formats that do not support transparency).
 */
class MakeTransparentEffectAction extends LeveledEffectAction {
  /**
   * @description tolerance The tolerance used to accommodate variance in the background color. (Range: 0 to 100, Server default: 10)
   * @param {number | string} value
   */
  tolerance(value: number | string): this {
    return this.setLevel(value);
  }

  /**
   * @@doc
   * @description The color to make transparent
   * @param {string} color HTML name(red, green, etc.) or RGB hex code.
   * @return {this}
   */
  color(color: string) {
    return this.addQualifier(new Qualifier('co', new QualifierValue(prepareColor(color))));
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
