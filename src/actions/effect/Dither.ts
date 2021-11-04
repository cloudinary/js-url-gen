import {LeveledEffectAction} from "./EffectActions/LeveledEffectAction.js";
import {IDitherModel} from "../../internal/models/IEffectActionModel.js";
import {IActionModel} from "../../internal/models/IActionModel.js";

/**
 * @description Applies an ordered dither filter to the image.
 * @extends LeveledEffectAction
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class DitherEffectAction extends LeveledEffectAction {
  protected _actionModel: IDitherModel = {actionType: 'dither'};
  /**
   *
   * @param {Qualifiers.Dither} ditherType - The dither type applied to the image
   * @return {this}
   */
  type(ditherType:number): this {
    this._actionModel.type = ditherType;
    const qualifierEffect = this.createEffectQualifier(this.effectType, ditherType);
    this.addQualifier(qualifierEffect);
    return this;
  }

  static fromJson(actionModel: IActionModel): DitherEffectAction {
    const {actionType, type} = (actionModel as IDitherModel);

    // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
    // This allows the inheriting classes to determine the class to be created
    const result = new this(actionType);
    type && result.type(type);

    return result;
  }
}


export {DitherEffectAction};
