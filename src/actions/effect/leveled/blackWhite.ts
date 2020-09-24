import EffectActionWithLevel from "../EffectActions/EffectActionWithLevel";

/**
 * @description Converts the image to black and white.
 * @memberOf Actions.Effect
 */
function blackWhite(level?: number | string):EffectActionWithLevel {
  return new EffectActionWithLevel('blackwhite', level);
}

export default blackWhite;
