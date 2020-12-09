import {LeveledEffectAction} from "../EffectActions/LeveledEffectAction";

/**
 * @class DeshakeEffectAction
 * @augments LeveledEffectAction
 * @description Removes small motion shifts from the video. with a maximum extent of movement in the horizontal and vertical direction of 32 pixels
 */
class DeshakeEffectAction extends LeveledEffectAction {
  /**
   * The maximum number of pixels in the horizontal and vertical direction that will be addressed. (Possible values: 16, 32, 48, 64. Server default: 16)
   * @param value
   */
  pixels(value: number | string): this {
    return this.setLevel(value);
  }
}



export {DeshakeEffectAction};
