import LeveledEffectAction from "../EffectActions/LeveledEffectAction";

/**
 * @description Delivers a video or animated GIF that contains additional loops of the video/GIF.
 * @class LoopEffectAction
 * @augments LeveledEffectAction
 */
class LoopEffectAction extends LeveledEffectAction {
  iterations(value: number | string): this {
    return this.setLevel(value);
  }
}

/**
 * @description
 * Delivers a video or animated GIF that contains additional loops of the video/GIF.
 * The total number of iterations is the number of additional loops plus one. <br/>
 * For animated GIFs only, you can also specify the loop effect without a numeric value to instruct it to loop the GIF infinitely.
 * @memberOf Actions.Effect
 * @param {number} additionalLoops The additional number of times to play the video or animated GIF.
 * @return {LoopEffectAction}
 */
function loop(additionalLoops?: number):LoopEffectAction {
  return new LoopEffectAction('loop', additionalLoops);
}

export default loop;
