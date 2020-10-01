import LeveledEffectAction from "./LeveledEffectAction";

/**
 * @class EffectActionWithLevel
 * @augments LeveledEffectAction
 * @description A class that provides a built in level() method that sets that level of the effect
 */
class EffectActionWithLevel extends LeveledEffectAction {
  level(value: number | string): this {
    return this.setLevel(value);
  }
}

export default EffectActionWithLevel;
