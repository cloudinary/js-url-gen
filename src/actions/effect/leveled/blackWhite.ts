import EffectActionWithLevel from "../EffectActions/EffectActionWithLevel";

/**
 * @description Converts the image to black and white.
 * @memberOf Actions.Effect
 * @param {number | string} level The balance between black (100) and white (0). (Range: 0 to 100, Server default: 50)
 * @return EffectActionWithLevel
 */
function blackWhite(level?: number | 'bw'):EffectActionWithLevel {
  return new EffectActionWithLevel('blackwhite', level);
}

export default blackWhite;
