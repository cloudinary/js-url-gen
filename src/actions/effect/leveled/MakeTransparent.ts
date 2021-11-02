import {LeveledEffectAction} from "../EffectActions/LeveledEffectAction.js";
import {Qualifier} from "../../../internal/qualifier/Qualifier.js";
import {QualifierValue} from "../../../internal/qualifier/QualifierValue.js";
import {prepareColor} from "../../../internal/utils/prepareColor.js";
import {SystemColors} from "../../../qualifiers/color.js";
import {IMakeTransparentEffectModel} from "../../../internal/models/IEffectActionModel.js";

/**
 * @description Makes the background of the image transparent (or solid white for formats that do not support transparency).
 * @extends LeveledEffectAction
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class MakeTransparentEffectAction extends LeveledEffectAction {
  protected _actionModel: IMakeTransparentEffectModel = {actionType: 'makeTransparent'};
  /**
   * @description Sets the tolerance used to accommodate variance in the background color.
   * @param {number | string} value The tolerance used to accommodate variance in the background color. (Range: 0 to 100, Server default: 10)
   */
  tolerance(value: number | string): this {
    this._actionModel.tolerance = value as number;
    return this.setLevel(value);
  }

  /**
   * @description Sets the color to make transparent.
   * @param {string} color The HTML name of the color (red, green, etc.) or RGB hex code.
   * @return {this}
   */
  colorToReplace(color: SystemColors): this {
    this._actionModel.color = color;
    return this.addQualifier(new Qualifier('co', new QualifierValue(prepareColor(color))));
  }
}


export {MakeTransparentEffectAction};
