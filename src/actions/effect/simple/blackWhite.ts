import EffectAction from "../EffectAction";

/**
 * @description Converts the image to black and white.
 * @memberOf Actions.Effect
 */
function blackWhite():EffectAction {
  return new EffectAction('blackwhite');
}

export default blackWhite;
