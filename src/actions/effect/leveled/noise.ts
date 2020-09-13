import EffectActionWithLevel from "../EffectActions/EffectActionWithLevel";


/**
 * @description Adds visual noise to the video, visible as a random flicker of "dots" or "snow".
 * @memberOf Actions.Effect
 * @param {number} percentage The percent of noise to apply. (Range: 0 to 100 Server default: 0)
 */
function noise(percentage?: number):EffectActionWithLevel {
  return new EffectActionWithLevel('noise', percentage);
}

export default noise;
