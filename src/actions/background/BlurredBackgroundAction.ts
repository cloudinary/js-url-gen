import Action from "../Action";
import Param from "../../parameters/Param";
import ParamValue from "../../parameters/ParamValue";

class BlurredBackgroundAction extends Action {
  private intensityLvl:number;
  private brightnessLevel:number;

  constructor() {
    super();

  }
  intensity(value:number): this {
    this.intensityLvl = value;
    return this;

  }
  brightness(value:number): this {
    this.brightnessLevel = value;
    return this;
  }

  protected prepareParam(): this {
    const paramValue = new ParamValue(['blurred', this.intensityLvl, this.brightnessLevel]).setDelimiter(':');
    this.addParam(new Param('b', paramValue));
    return this;
  }
}

export default BlurredBackgroundAction;
