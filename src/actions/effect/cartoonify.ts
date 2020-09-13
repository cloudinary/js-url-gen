import SimpleEffectAction from "./EffectActions/SimpleEffectAction";


/**
 * @description Applies a cartoonify filter to the asset.
 * @memberOf Actions.Effect
 * @param cartoonifyLevel
 */
function cartoonify(cartoonifyLevel?: number):SimpleEffectAction {
  return new SimpleEffectAction('cartoonify', cartoonifyLevel);
}

export default cartoonify;
