import {LeveledEffectAction} from "../EffectActions/LeveledEffectAction.js";
import {IActionModel} from "../../../internal/models/IActionModel.js";

/**
 * @description Delivers a video or animated GIF that contains additional loops of the video/GIF.
 * @extends LeveledEffectAction
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class LoopEffectAction extends LeveledEffectAction {
  additionalIterations(value: number | string): this {
    this._actionModel.iterations = value;
    const qualifierEffect = this.createEffectQualifier(this.effectType, value);
    this.addQualifier(qualifierEffect);
    return this;
  }

  static fromJson(actionModel: IActionModel): LoopEffectAction {
    const {actionType, iterations } = (actionModel);

    // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
    // This allows the inheriting classes to determine the class to be created
    const result = new this(actionType, iterations as number);

    return result;
  }
}


export {LoopEffectAction};
