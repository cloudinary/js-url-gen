import {LeveledEffectAction} from "./EffectActions/LeveledEffectAction";

/**
 * @description Applies an ordered dither filter to the image.
 * @augments LeveledEffectAction
 */
class DitherEffectAction extends LeveledEffectAction {
  /**
   *
   * @param {Values.Dither} ditherType - The dither type applied to the image
   * @return {this}
   */
  type(ditherType:number) {
    return this.setLevel(ditherType);
  }
}


export {DitherEffectAction};
