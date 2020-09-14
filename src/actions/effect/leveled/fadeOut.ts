import LeveledEffectAction from "../EffectActions/LeveledEffectAction";


// We can't use EffectActionWithLength because this `length` is reversing the sign
class FadeoutEffectAction extends LeveledEffectAction {
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
 */
function fadeOut(fadeLength?: number):FadeoutEffectAction {
  return new FadeoutEffectAction('fade', -fadeLength);
}

export default fadeOut;
