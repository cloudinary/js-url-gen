import EffectActionWithLevel from "../EffectActions/EffectActionWithLevel";

/**
 * @description Pixelates all detected faces in the image.
 * @memberOf Actions.Effect
 * @param {number} squareSize The width of each pixelation square in pixels. (Range: 1 to 200, Server default: 5)
 * @return EffectActionWithLevel
 */
function pixelateFaces(squareSize?: number):EffectActionWithLevel {
  return new EffectActionWithLevel('pixelate_faces', squareSize);
}

export default pixelateFaces;
