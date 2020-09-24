import SimpleEffectAction from "../EffectActions/SimpleEffectAction";


/**
 * @description Plays the video or audio file in reverse.
 * @memberOf Actions.Effect
 * @return {SimpleEffectAction}
 */
function reverse():SimpleEffectAction {
  return new SimpleEffectAction('reverse');
}

export default reverse;


/*
 e_negate
 e_redeye
 e_blur_faces
 */
