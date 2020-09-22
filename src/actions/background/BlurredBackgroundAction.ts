import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";
import QualifierValue from "../../qualifier/QualifierValue";

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

  protected prepareQualifiers(): this {
    const qualifierValue = new QualifierValue(['blurred', this.intensityLvl, this.brightnessLevel]).setDelimiter(':');
    this.addQualifier(new Qualifier('b', qualifierValue));
    return this;
  }
}

export default BlurredBackgroundAction;
