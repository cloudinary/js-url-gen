import Action from "../Action";
import Qualifier from "../../qualifiers/Qualifier";
import QualifierValue from "../../qualifiers/QualifierValue";

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

  protected prepareQualifiers(): this {
    const qualifierValue = new QualifierValue(['improve', this.modeValue, this.blendValue]).setDelimiter(':');
    this.addQualifier(new Qualifier('e', qualifierValue));
    return this;
  }
}

export default ImproveAction;
