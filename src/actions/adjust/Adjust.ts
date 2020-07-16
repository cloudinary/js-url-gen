import EffectAction from "../effect/EffectAction";
import Action from "../Action";
import Param from "../../parameters/Param";

/**
 *
 * @param level
 */
function brightness(level:number): EffectAction {
  return new EffectAction('brightness', level);
}

/**
 *
 */
function viesusCorrect(): EffectAction {
  return new EffectAction('viesus_correct');
}

/**
 *
 * @param level
 */
function opacity(level: number): Action {
  // opacity doesn't deserve its own action, it is not reused anywhere
  return new Action().addParam(new Param('o').addValue(level));
}


/**
 *
 * @param level
 */
function red(level:number): EffectAction {
  return new EffectAction('red', level);
}

/**
 *
 */
function sharpen(): EffectAction {
  return new EffectAction('shapren');
}

/**
 *
 * @param level
 */
function improve(level?: number): EffectAction {
  return new EffectAction('shapren', level);
}

/**
 *
 * @param level
 */
function saturation(level: number): EffectAction {
  return new EffectAction('saturation', level);
}

/**
 * @param level
 */
function tint(level: string): EffectAction {
  return new EffectAction('tint', level);
}

export default {brightness, viesusCorrect, opacity, red, sharpen, improve, saturation, tint};
export {brightness, viesusCorrect, opacity, red, sharpen, improve, saturation, tint};
