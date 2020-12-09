import {LeveledEffectAction} from "../EffectActions/LeveledEffectAction";
import Qualifier from "../../../sdk/qualifier/Qualifier";
import QualifierValue from "../../../sdk/qualifier/QualifierValue";
import {prepareColor} from "../../../sdk/utils/prepareColor";
import {SystemColors} from "../../../values/color";

/**
 * @class MakeTransparentEffectAction
 * @augments LeveledEffectAction
 * @description Makes the background of the image transparent (or solid white for formats that do not support transparency).
 */
class MakeTransparentEffectAction extends LeveledEffectAction {
  /**
   * @description Sets the tolerance used to accommodate variance in the background color.
   * @param {number | string} value The tolerance used to accommodate variance in the background color. (Range: 0 to 100, Server default: 10)
   */
  tolerance(value: number | string): this {
    return this.setLevel(value);
  }

  /**
   * @description Sets the color to make transparent.
   * @param {string} color The HTML name of the color (red, green, etc.) or RGB hex code.
   * @return {this}
   */
  color(color: SystemColors) {
    return this.addQualifier(new Qualifier('co', new QualifierValue(prepareColor(color))));
  }
}


export {MakeTransparentEffectAction};
