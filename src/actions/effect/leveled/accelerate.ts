import LeveledEffectAction from "../EffectActions/LeveledEffectAction";

class AccelerationEffectAction extends LeveledEffectAction {
  rate(value: number | string): this {
    return this.setLevel(value);
  }
}

/**
 * @description Changes the speed of the video playback.
 * @memberOf Actions.Effect
 * @param {number} speedIncreasePercent The percentage change of speed. Positive numbers speed up the playback, negative numbers slow down the playback (Range: -50 to 100, Server default: 0)
 */
function accelerate(speedIncreasePercent?: number): AccelerationEffectAction {
  return new AccelerationEffectAction('accelerate', speedIncreasePercent);
}

export default accelerate;
