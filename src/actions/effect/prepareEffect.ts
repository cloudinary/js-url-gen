import ParamValue from "../../parameters/ParamValue";
import Param from "../../parameters/Param";

/**
 * @param effect
 * @param level
 */
export function prepareEffect(effect: string, level?: number): Param {
  let paramValue;
  if(level) {
    paramValue = new ParamValue([effect, `${level}`]).setDelimiter(':');
  } else {
    paramValue = new ParamValue(effect);
  }
  return new Param('e', paramValue);
}
