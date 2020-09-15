import Action from "../Action";
import Qualifier from "../../qualifiers/Qualifier";
import QualifierValue from "../../qualifiers/QualifierValue";

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

  protected prepareQualifiers(): this {
    const qualifierValue = new QualifierValue(['fill_light', this.lvl, this.biasLvl]).setDelimiter(':');
    this.addQualifier(new Qualifier('e', qualifierValue));
    return this;
  }
}

export default FillLightAction;
