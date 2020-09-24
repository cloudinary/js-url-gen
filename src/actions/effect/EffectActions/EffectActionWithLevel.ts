import LeveledEffectAction from "./LeveledEffectAction";

/**
 * @class EffectActionWithLevel
 * @augments LeveledEffectAction
 * @description A class for all effects that include a level method
 */
class EffectActionWithLevel extends LeveledEffectAction {
  level(value: number | string): this {
    return this.setLevel(value);
  }
}

export default EffectActionWithLevel;
