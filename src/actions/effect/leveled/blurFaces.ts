import EffectAction from "../EffectAction";



/**
 * @description Blurs all detected faces in the image.
 * @memberOf Actions.Effect
 * @param {number} blurLevel The strength of the blur. (Range: 1 to 2000, Server default: 500)
 */
function blurFaces(blurLevel?: number):EffectAction {
  return new EffectAction('blur_faces', blurLevel);
}

export default blurFaces;
