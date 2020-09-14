import Action from "../Action";
import Param from "../../parameters/Param";
import ParamValue from "../../parameters/ParamValue";

class FPSRangeAction extends Action {
  private from: number;
  private to: number;

  constructor(from: number, to?: number) {
    super();
    this.from = from;
    this.to = to;
  }


  protected prepareParam(): this {
    let paramValue;
    if(this.from && this.to) {
      paramValue = new ParamValue(`${this.from}-${this.to}`);
    }else {
      paramValue = new ParamValue(`${this.from}-`);
    }
    this.addParam(new Param('fps', paramValue));
    return this;
  }
}

export default FPSRangeAction;
