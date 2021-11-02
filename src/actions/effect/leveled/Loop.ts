import {LeveledEffectAction} from "../EffectActions/LeveledEffectAction.js";

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
}


export {LoopEffectAction};
