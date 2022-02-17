import {LeveledEffectAction} from "../EffectActions/LeveledEffectAction.js";
import {Qualifier} from "../../../internal/qualifier/Qualifier.js";
import {QualifierValue} from "../../../internal/qualifier/QualifierValue.js";
import {prepareColor} from "../../../internal/utils/prepareColor.js";
import {SystemColors} from "../../../qualifiers/color.js";
import {IMakeTransparentEffectModel} from "../../../internal/models/IEffectActionModel.js";
import {IActionModel} from "../../../internal/models/IActionModel.js";
import {ACTION_TYPE_TO_EFFECT_MODE_MAP} from "../../../internal/internalConstants.js";

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
    const qualifierEffect = this.createEffectQualifier(this.effectType, value);
    this.addQualifier(qualifierEffect);
    return this;
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

  static fromJson(actionModel: IActionModel): MakeTransparentEffectAction {
    const {actionType, tolerance, color } = (actionModel as IMakeTransparentEffectModel);

    // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
    // This allows the inheriting classes to determine the class to be created
    const result = new this(ACTION_TYPE_TO_EFFECT_MODE_MAP[actionType], tolerance);
    tolerance && result.tolerance(tolerance);
    color && result.colorToReplace(color);

    return result;
  }
}


export {MakeTransparentEffectAction};
