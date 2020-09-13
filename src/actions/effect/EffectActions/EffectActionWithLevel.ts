import LeveledEffectAction from "./LeveledEffectAction";

class EffectActionWithLevel extends LeveledEffectAction {
  level(value: number | string): this {
    return this.setLevel(value);
  }
}

export default EffectActionWithLevel;
