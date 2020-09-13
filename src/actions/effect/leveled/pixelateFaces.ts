import EffectAction from "../EffectAction";


/**
 * @description Pixelates all detected faces in the image.
 * @memberOf Actions.Effect
 * @param {number} squareSize The width of each pixelation square in pixels. (Range: 1 to 200, Server default: 5)
 */
function pixelateFaces(squareSize?: number):EffectAction {
  return new EffectAction('pixelate_faces', squareSize);
}

export default pixelateFaces;
