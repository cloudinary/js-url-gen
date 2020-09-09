import EffectAction from "../EffectAction";


/**
 * @description Applies a pixelation effect to the image.
 * @memberOf Actions.Effect
 * @param {number} squareSize The width of each pixelation square in pixels. (Range: 1 to 200, Server default: 5)
 */
function pixelate(squareSize?: number):EffectAction {
  return new EffectAction('pixelate', squareSize);
}

export default pixelate;
