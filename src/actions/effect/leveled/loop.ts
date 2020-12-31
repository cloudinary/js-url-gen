import {LeveledEffectAction} from "../EffectActions/LeveledEffectAction";

/**
 * @augments LeveledEffectAction
 * @description Delivers a video or animated GIF that contains additional loops of the video/GIF.
 */
class LoopEffectAction extends LeveledEffectAction {
  additionalIterations(value: number | string): this {
    return this.setLevel(value);
  }
}


export {LoopEffectAction};
