import Action from "../Action";
import {IAction} from "../../interfaces/IAction";
import Param from "../../parameters/Param";
import ParamValue from "../../parameters/ParamValue";


class EffectAction extends Action implements IAction {
  constructor(effectType?: string, level?: number|string) {
    super();
    const paramEffect = this.createEffectParam(effectType, level);
    this.addParam(paramEffect);
  }

  createEffectParam(effectType: string, level?: number|string):Param {
    let paramValue;
    if(level) {
      paramValue = new ParamValue([effectType, `${level}`]).setDelimiter(':');
    } else {
      paramValue = new ParamValue(effectType);
    }
    return new Param('e', paramValue);
  }
}

export default EffectAction;
