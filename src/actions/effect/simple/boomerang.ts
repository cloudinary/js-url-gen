import SimpleEffectAction from "../EffectActions/SimpleEffectAction";

/**
 * @description
 * Causes a video clip to play forwards and then backwards.
 * Use in conjunction with trimming parameters ('duration', 'start_offset', or 'end_offset') and the 'loop' effect to deliver a classic (short, repeating) boomerang clip.<br/>
 * For details and examples, see 'Create a boomerang video clip' in the Video Transformations guide.
 * @memberOf Actions.Effect
 */
function boomerang():SimpleEffectAction {
  return new SimpleEffectAction('boomerang');
}

export default boomerang;
