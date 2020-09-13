import EffectActionWithLength from "../EffectActions/EffectActionWithLength";


/**
 * @description
 * Fade in at the beginning of the video.
 * For details and examples, see 'Fade in and out' in the Video Transformations guide.
 * @memberOf Actions.Effect
 * @param {number} fadeLength The time in ms for the fade to occur. (Server default: 2000)
 */
function fadeIn(fadeLength?: number):EffectActionWithLength {
  return new EffectActionWithLength('fade', fadeLength);
}

export default fadeIn;
