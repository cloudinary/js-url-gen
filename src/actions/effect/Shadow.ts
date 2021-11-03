import {Action} from "../../internal/Action.js";
import {QualifierValue} from "../../internal/qualifier/QualifierValue.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {prepareColor} from "../../internal/utils/prepareColor.js";
import {SystemColors} from "../../qualifiers/color.js";
import {ExpressionQualifier} from "../../qualifiers/expression/ExpressionQualifier.js";
import {IShadowEffectActionModel} from "../../internal/models/IEffectActionModel.js";
import {IActionModel} from "../../internal/models/IActionModel.js";

/**
 * @description Applies a shadow filter to the asset.
 * @memberOf Actions.Effect
 * @extends SDK.Action
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class ShadowEffectAction extends Action {
  protected _actionModel: IShadowEffectActionModel = {};
  private effectType: string;

  constructor(effectType: string, strength: number) {
    super();
    this._actionModel.actionType = effectType;
    this.effectType = effectType;
    this.addQualifier(new Qualifier('e', new QualifierValue(['shadow', strength])));
  }

  /**
   * @description The strength of the shadow. (Range: 0 to 100, Server default: 40)
   * @param {number} strength
   * @return {this}
   */
  strength(strength: number): this {
    this._actionModel.strength = strength;
    return this.addQualifier(new Qualifier('e', new QualifierValue(['shadow', strength])));
  }

  /**
   * @description The X offset the shadow
   * @param {number | SDK.ExpressionQualifier} x
   * @return {this}
   */
  offsetX(x:number | ExpressionQualifier): this {
    this._actionModel.offsetX = x as number;
    return this.addQualifier(new Qualifier('x', new QualifierValue(x)));
  }

  /**
   * @description The Y offset the shadow
   * @param {number | SDK.ExpressionQualifier} y
   * @return {this}
   */
  offsetY(y:number | ExpressionQualifier): this {
    this._actionModel.offsetY = y as number;
    return this.addQualifier(new Qualifier('y', new QualifierValue(y)));
  }

  /**
   * @description The color of the shadow (Server default: gray)
   * @param color
   * @return {this}
   */
  color(color:SystemColors): this {
    this._actionModel.color = color;
    return this.addQualifier(new Qualifier('co', new QualifierValue(prepareColor(color))));
  }

  static fromJson(actionModel: IActionModel): ShadowEffectAction {
    const {actionType, strength, offsetX, offsetY, color} = (actionModel as IShadowEffectActionModel);

    // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
    // This allows the inheriting classes to determine the class to be created
    const result = new this(actionType, strength);
    offsetX && result.offsetX(offsetX);
    offsetY && result.offsetY(offsetY);
    color && result.color(color);

    return result;
  }
}


export {ShadowEffectAction};
