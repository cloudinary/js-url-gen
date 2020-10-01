import LeveledEffectAction from "../EffectActions/LeveledEffectAction";


/**
 * @class FadeoutEffectAction
 * @augments LeveledEffectAction
 * @description Fade out at the end of the video, use the length() method to set the time in ms for the fade to occur. (Server default: 2000)
 */
class FadeoutEffectAction extends LeveledEffectAction {
  // We can't use EffectActionWithLength because this `length` is reversing the sign
  length(value: number | string): this {
    return this.setLevel(-value);
  }
}

/**
 * @description
 * Fade out at the end of the video.
 * For details and examples, see 'Fade in and out' in the Video Transformations guide.
 * @memberOf Actions.Effect
 * @param {number} fadeLength The time in ms for the fade to occur. (Server default: 2000)
 * @return {FadeoutEffectAction}
 */
function fadeOut(fadeLength?: number):FadeoutEffectAction {
  return new FadeoutEffectAction('fade', -fadeLength);
}

export default fadeOut;
