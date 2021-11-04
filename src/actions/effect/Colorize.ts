import {QualifierValue} from "../../internal/qualifier/QualifierValue.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {prepareColor} from "../../internal/utils/prepareColor.js";
import {EffectActionWithLevel}from "./EffectActions/EffectActionWithLevel.js";
import {SystemColors} from "../../qualifiers/color.js";
import {IActionModel} from "../../internal/models/IActionModel.js";
import {IColorizeModel} from "../../internal/models/IEffectActionModel.js";

/**
 * @description Applies a colorizing filter to the asset, use the methods in the class to adjust the filter
 * @extends EffectActionWithLevel
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class ColorizeEffectAction extends EffectActionWithLevel {
  /**
   * @description The color to use for colorization. Specify HTML name or RGB hex code. (Server default: gray)
   * @param {string} color HTML name(red, green, etc.) or RGB hex code. (Server default: gray)
   * @return {this}
   */
  color(color: SystemColors): this {
    this._actionModel.color = color;
    return this.addQualifier(new Qualifier('co', new QualifierValue(prepareColor(color))));
  }

  static fromJson(actionModel: IActionModel): ColorizeEffectAction {
    const {actionType, level, color} = (actionModel as IColorizeModel);

    // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
    // This allows the inheriting classes to determine the class to be created
    const result = new this(actionType, level);
    color && result.color(color);

    return result;
  }
}


export {ColorizeEffectAction};
