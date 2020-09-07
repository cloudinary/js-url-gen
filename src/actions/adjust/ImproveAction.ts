import Action from "../Action";
import Param from "../../parameters/Param";
import ParamValue from "../../parameters/ParamValue";

class ImproveAction extends Action {
  private modeValue:string;
  private blendValue:number;
  constructor() {
    super();
  }

  mode(value:'outdoor' | 'indoor' | string): this {
    this.modeValue = value;
    return this;
  }

  blend(value:number): this {
    this.blendValue = value;
    return this;
  }

  protected prepareParam(): this {
    const paramValue = new ParamValue(['improve', this.modeValue, this.blendValue]).setDelimiter(':');
    this.addParam(new Param('e', paramValue));
    return this;
  }
}

export default ImproveAction;
