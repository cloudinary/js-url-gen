import LeveledEffectAction from "./LeveledEffectAction";

/**
 * @description A class for all effects that include a strength method
 * @class EffectActionWithStrength
 * @augments LeveledEffectAction
 */
class EffectActionWithStrength extends LeveledEffectAction {
  strength(value: number | string): this {
    return this.setLevel(value);
  }
}

export default EffectActionWithStrength;
