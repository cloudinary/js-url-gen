import {LeveledEffectAction} from "./EffectActions/LeveledEffectAction";

/**
 * @description Applies an ordered dither filter to the image.
 * @augments LeveledEffectAction
 */
class DitherEffectAction extends LeveledEffectAction {
  /**
   *
   * @param {Qualifiers.Dither} ditherType - The dither type applied to the image
   * @return {this}
   */
  type(ditherType:number): this {
    return this.setLevel(ditherType);
  }
}


export {DitherEffectAction};
