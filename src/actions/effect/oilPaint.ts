import EffectAction from "./EffectAction";
import {IEffectAction} from "./IEffectAction";


/**
 * @description Applies an oilPaint filter to the asset.
 * @memberOf Actions.Effect
 * @param oilPaintLevel
 */
function oilPaint(oilPaintLevel?: number):IEffectAction {
  return new EffectAction('oilPaint', oilPaintLevel);
}

export default oilPaint;
