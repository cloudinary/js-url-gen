import EffectAction from "../EffectAction";


/**
 * @description Plays the video or audio file in reverse.
 * @memberOf Actions.Effect
 */
function reverse():EffectAction {
  return new EffectAction('reverse');
}

export default reverse;
