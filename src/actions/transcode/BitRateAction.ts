import Action from "../Action";
import Param from "../../parameters/Param";
import ParamValue from "../../parameters/ParamValue";

class BitRateAction extends Action {
  private bitRate: string|number;
  private isConstant = false;

  constructor(bitRate: string|number) {
    super();
    this.bitRate = bitRate;
  }
  constant(): this {
    this.isConstant = true;
    return this;
  }

  protected prepareParam(): this {
    let paramValue;
    if(this.isConstant) {
      paramValue = new ParamValue([this.bitRate, 'constant']).setDelimiter(':');
    }else {
      paramValue = new ParamValue(this.bitRate);
    }
    this.addParam(new Param('br', paramValue));
    return this;
  }
}

export default BitRateAction;
