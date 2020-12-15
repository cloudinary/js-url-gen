import {LeveledEffectAction} from "./LeveledEffectAction";

/**
 * @class EffectActionWithLevel
 * @extends {Actions.Effect.LeveledEffectAction}
 * @memberOf Actions.Effect
 * @description A class that provides a built in level() method that sets the level of the effect
 */
class EffectActionWithLevel extends LeveledEffectAction {
  level(value: number | string): this {
    return this.setLevel(value);
  }
}

export {EffectActionWithLevel};
