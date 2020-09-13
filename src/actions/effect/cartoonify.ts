import EffectAction from "./EffectAction";


/**
 * @description Applies a cartoonify filter to the asset.
 * @memberOf Actions.Effect
 * @param cartoonifyLevel
 */
function cartoonify(cartoonifyLevel?: number):EffectAction {
  return new EffectAction('cartoonify', cartoonifyLevel);
}

export default cartoonify;
