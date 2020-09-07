import Action from "../Action";
import Param from "../../parameters/Param";
import ParamValue from "../../parameters/ParamValue";

class FillLightAction extends Action {
  private lvl:number;
  private biasLvl:number;
  constructor() {
    super();
  }
  level(lvl:number): this {
    this.lvl = lvl;
    return this;
  }
  bias(biasLvl:number): this {
    this.biasLvl = biasLvl;
    return this;
  }

  protected prepareParam(): this {
    const paramValue = new ParamValue(['fill_light', this.lvl, this.biasLvl]).setDelimiter(':');
    this.addParam(new Param('e', paramValue));
    return this;
  }
}

export default FillLightAction;
