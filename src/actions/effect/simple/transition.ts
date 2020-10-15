import SimpleEffectAction from "../EffectActions/SimpleEffectAction";


/**
 * @description Supports the concatenation of videos with a custom transition by including a transition video as an
 * additional layer and specifying the transition effect
 * @memberOf Actions.Effect
 * @return {SimpleEffectAction}
 */
function transition():SimpleEffectAction {
  return new SimpleEffectAction('transition');
}

export default transition;
