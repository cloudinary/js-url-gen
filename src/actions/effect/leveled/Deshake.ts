import {LeveledEffectAction} from "../EffectActions/LeveledEffectAction.js";
import {ExpressionQualifier} from "../../../qualifiers/expression/ExpressionQualifier.js";
import {IDeshakeEffectModel} from "../../../internal/models/IEffectActionModel.js";

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
  shakeStrength(value: 16 | 32 | 48 | 64 | string | ExpressionQualifier): this {
    this._actionModel.pixels = value as number;
    const qualifierEffect = this.createEffectQualifier(this.effectType, value);
    this.addQualifier(qualifierEffect);
    return this;
  }
}



export {DeshakeEffectAction};
