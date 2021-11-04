import {LeveledEffectAction} from "../EffectActions/LeveledEffectAction.js";
import {ExpressionQualifier} from "../../../qualifiers/expression/ExpressionQualifier.js";
import {IDeshakeEffectModel} from "../../../internal/models/IEffectActionModel.js";
import {IActionModel} from "../../../internal/models/IActionModel.js";

type pixels = 16 | 32 | 48 | 64;
/**
 * @description Removes small motion shifts from the video. with a maximum extent of movement in the horizontal and vertical direction of 32 pixels
 * @extends LeveledEffectAction
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class DeshakeEffectAction extends LeveledEffectAction {
  protected _actionModel: IDeshakeEffectModel = {actionType: 'deshake'};
  /**
   * The maximum number of pixels in the horizontal and vertical direction that will be addressed. (Possible values: 16, 32, 48, 64. Server default: 16)
   * @param value Possible values: 16, 32, 48, 64.  Server default: 16.
   */
  shakeStrength(value: pixels | string | ExpressionQualifier): this {
    this._actionModel.pixels = value as pixels;
    const qualifierEffect = this.createEffectQualifier(this.effectType, value);
    this.addQualifier(qualifierEffect);
    return this;
  }

  static fromJson(actionModel: IActionModel): DeshakeEffectAction {
    const {actionType, pixels} = (actionModel as IDeshakeEffectModel);

    // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
    // This allows the inheriting classes to determine the class to be created
    const result = new this(actionType, pixels);

    return result;
  }
}



export {DeshakeEffectAction};
