import Action from "../Action";
import {IAction} from "../../interfaces/IAction";
import Param from "../../parameters/Param";
import ParamValue from "../../parameters/ParamValue";

class FlagAction extends Action implements IAction {
  constructor(flagType: string, flagValue?: string) {
    super();
    let paramValue;
    if(flagValue) {
      paramValue = new ParamValue([flagType, `${flagValue}`]).setDelimiter(':');
    }else {
      paramValue = new ParamValue(flagType);
    }
    this.addParam(new Param('fl', paramValue));
  }
}

export default FlagAction;
