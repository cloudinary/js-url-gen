import EffectActionWithLevel from "../EffectActions/EffectActionWithLevel";

/**
 * @description Applies an oilPaint filter to the asset.
 * @memberOf Actions.Effect
 * @param {number} oilPaintLevel The strength of the effect. (Range: 0 to 100, Server default: 30)
 * @return {EffectActionWithLevel}
 */
function oilPaint(oilPaintLevel?: number):EffectActionWithLevel {
  return new EffectActionWithLevel('oil_paint', oilPaintLevel);
}

export default oilPaint;
