import LeveledEffectAction from "./EffectActions/LeveledEffectAction";
import QualifierValue from "../../qualifier/QualifierValue";
import Qualifier from "../../qualifier/Qualifier";
import {prepareColor} from "../../utils/prepareColor";

class ColorizeEffectAction extends LeveledEffectAction {
  color(color: string) {
    return this.addQualifier(new Qualifier('co', new QualifierValue(prepareColor(color))));
  }
}

/**
 * @description Applies a colorizing filter to the asset.
 * @memberOf Actions.Effect
 * @param colorizeLevel
 * @return {ColorizeEffectAction}
 */
function colorize(colorizeLevel: number):ColorizeEffectAction {
  return new ColorizeEffectAction('colorize', colorizeLevel);
}

export default colorize;
