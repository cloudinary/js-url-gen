import {LeveledEffectAction} from "../EffectActions/LeveledEffectAction";

/**
 * @augments LeveledEffectAction
 * @description Changes the speed of the video playback using the rate() method
 */
class AccelerationEffectAction extends LeveledEffectAction {
  rate(value: number | string): this {
    return this.setLevel(value);
  }
}


export {AccelerationEffectAction};
