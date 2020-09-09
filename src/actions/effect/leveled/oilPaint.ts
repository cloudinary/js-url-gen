import EffectAction from "../EffectAction";



/**
 * @description Applies an oilPaint filter to the asset.
 * @memberOf Actions.Effect
 * @param {number} oilPaintLevel The strength of the effect. (Range: 0 to 100, Server default: 30)
 */
function oilPaint(oilPaintLevel?: number):EffectAction {
  return new EffectAction('oil_paint', oilPaintLevel);
}

export default oilPaint;
