import LeveledEffectAction from "./EffectActions/LeveledEffectAction";

/**
 * @description Applies an ordered dither filter to the image.
 * @class DitherEffectAction
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

/**
 * @description
 * Applies an ordered dither filter to the image.
 * Use the constants defined in {@link Values.Dither|@cloudinary/base/values/dither} for ditherType.
 * @memberOf Actions.Effect
 * @param {Values.Dither} ditherType - The dither type applied to the image
 * @return {DitherEffectAction}
 */
function dither(ditherType?: number):DitherEffectAction {
  return new DitherEffectAction('ordered_dither', ditherType);
}

export default dither;
