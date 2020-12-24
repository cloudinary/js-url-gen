import {LeveledEffectAction} from "./LeveledEffectAction";

/**
 * @description A class for all effects that include a blendPercentage method
 * @memberOf Actions.Effect
 * @extends {Actions.Effect.LeveledEffectAction}
 */
class EffectActionWithBlend extends LeveledEffectAction {
  blend(value: number | string): this {
    return this.setLevel(value);
  }
}

export {EffectActionWithBlend};
