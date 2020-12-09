import {EffectActionWithStrength} from "../../effect/EffectActions/EffectActionWithStrength";

/**
 * @description Applies a vibrance filter on the image.
 * @memberOf Actions.Adjust
 * @param {number} strength The strength of the vibrance. (Range: -100 to 100, Server default: 20)
 * @return {EffectActionWithStrength}
 */
function vibrance(strength?:number):EffectActionWithStrength {
  return new EffectActionWithStrength('vibrance', strength);
}

export default vibrance;
