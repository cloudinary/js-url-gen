import EffectAction from "../EffectAction";


/**
 * @description Changes the speed of the video playback.
 * @memberOf Actions.Effect
 * @param {number} speedIncreasePercent The percentage change of speed. Positive numbers speed up the playback, negative numbers slow down the playback (Range: -50 to 100, Server default: 0)
 */
function accelerate(speedIncreasePercent?: number):EffectAction {
  return new EffectAction('accelerate', speedIncreasePercent);
}

export default accelerate;
