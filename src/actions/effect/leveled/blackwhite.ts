import {LeveledEffectAction} from "../EffectActions/LeveledEffectAction";

/**
 * @augments LeveledEffectAction
 * @description Converts the image to black and white.
 */
class BlackwhiteEffectAction extends LeveledEffectAction {
  threshold(value: number | string): this {
    return this.setLevel(value);
  }
}


export {BlackwhiteEffectAction};
