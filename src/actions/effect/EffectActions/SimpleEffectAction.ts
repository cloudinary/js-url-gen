import Action from "../../Action";
import Param from "../../../parameters/Param";
import ParamValue from "../../../parameters/ParamValue";


class SimpleEffectAction extends Action {
  constructor(effectType?: string, level?: number|string) {
    super();
    const paramEffect = this.createEffectParam(effectType, level);
    this.addParam(paramEffect);
  }

  protected createEffectParam(effectType: string, level?: number|string):Param {
    let paramValue;
    if(level) {
      paramValue = new ParamValue([effectType, `${level}`]).setDelimiter(':');
    } else {
      paramValue = new ParamValue(effectType);
    }
    return new Param('e', paramValue);
  }
}

export default SimpleEffectAction;
