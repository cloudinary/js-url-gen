import {LeveledEffectAction} from "./LeveledEffectAction";

/**
 * @description A class for all effects that include a blendPercentage method
 * @class EffectActionWithBlendPercentage
 * @augments LeveledEffectAction
 */
class EffectActionWithBlendPercentage extends LeveledEffectAction {
  blendPercentage(value: number | string): this {
    return this.setLevel(value);
  }
}

export {EffectActionWithBlendPercentage};
