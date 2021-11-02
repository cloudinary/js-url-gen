import {LeveledEffectAction} from "./EffectActions/LeveledEffectAction.js";
import {IDitherModel} from "../../internal/models/IEffectActionModel.js";

/**
 * @description Applies an ordered dither filter to the image.
 * @extends LeveledEffectAction
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class DitherEffectAction extends LeveledEffectAction {
  protected _actionModel: IDitherModel = {actionType: 'Dither'};
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
}


export {DitherEffectAction};
