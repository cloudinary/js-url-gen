import LeveledEffectAction from "./LeveledEffectAction";

class EffectActionWithLength extends LeveledEffectAction {
  length(value: number | string): this {
    return this.setLevel(value);
  }
}

export default EffectActionWithLength;
