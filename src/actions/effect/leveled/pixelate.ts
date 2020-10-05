import EffectActionWithLevel from "../EffectActions/EffectActionWithLevel";

/**
 * @description Applies a pixelation effect to the image.
 * @memberOf Actions.Effect
 * @param {number} squareSize The width of each pixelation square in pixels. (Range: 1 to 200, Server default: 5)
 * @return {EffectActionWithLevel}
 */
function pixelate(squareSize?: number):EffectActionWithLevel {
  return new EffectActionWithLevel('pixelate', squareSize);
}

export default pixelate;
