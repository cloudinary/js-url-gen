import LeveledEffectAction from "./EffectActions/LeveledEffectAction";


class DitherEffectAction extends LeveledEffectAction {
  type(ditherType:number) {
    return this.setLevel(ditherType);
  }
}

/**
 * @description
 * Applies an ordered dither filter to the image.
 * Use the constants defined in @cloudinary/base/constants/dither for ditherType.
 * @memberOf Actions.Effect
 * @param ditherType
 */
function dither(ditherType?: number):DitherEffectAction {
  return new DitherEffectAction('ordered_dither', ditherType);
}

export default dither;
