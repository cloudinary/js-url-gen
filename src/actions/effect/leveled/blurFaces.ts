import EffectActionWithLevel from "../EffectActions/EffectActionWithLevel";



/**
 * @description Blurs all detected faces in the image.
 * @memberOf Actions.Effect
 * @param {number} blurLevel The strength of the blur. (Range: 1 to 2000, Server default: 500)
 */
function blurFaces(blurLevel?: number):EffectActionWithLevel {
  return new EffectActionWithLevel('blur_faces', blurLevel);
}

export default blurFaces;
