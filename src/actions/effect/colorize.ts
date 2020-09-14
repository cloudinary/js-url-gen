import LeveledEffectAction from "./EffectActions/LeveledEffectAction";
import ParamValue from "../../parameters/ParamValue";
import Param from "../../parameters/Param";
import {prepareColor} from "../../utils/prepareColor";

class ColorizeEffectAction extends LeveledEffectAction {
  color(color: string) {
    return this.addParam(new Param('co', new ParamValue(prepareColor(color))));
  }
}

/**
 * @description Applies a colorizing filter to the asset.
 * @memberOf Actions.Effect
 * @param colorizeLevel
 */
function colorize(colorizeLevel: number):ColorizeEffectAction {
  return new ColorizeEffectAction('colorize', colorizeLevel);
}

export default colorize;
