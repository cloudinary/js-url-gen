import {LeveledEffectAction} from "../EffectActions/LeveledEffectAction";


/**
 * @augments LeveledEffectAction
 * @description Fade out at the end of the video, use the length() method to set the time in ms for the fade to occur. (Server default: 2000)
 */
class FadeoutEffectAction extends LeveledEffectAction {
  // We can't use EffectActionWithLength because this `length` is reversing the sign
  duration(value: number | string): this {
    return this.setLevel(-value);
  }
}


export {FadeoutEffectAction};
