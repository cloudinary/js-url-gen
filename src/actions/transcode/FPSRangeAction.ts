import Action from "../Action";
import Qualifier from "../../qualifiers/Qualifier";
import QualifierValue from "../../qualifiers/QualifierValue";

class FPSRangeAction extends Action {
  private from: number;
  private to: number;

  constructor(from: number, to?: number) {
    super();
    this.from = from;
    this.to = to;
  }


  protected prepareQualifiers(): this {
    let qualifierValue;
    if(this.from && this.to) {
      qualifierValue = new QualifierValue(`${this.from}-${this.to}`);
    }else {
      qualifierValue = new QualifierValue(`${this.from}-`);
    }
    this.addQualifier(new Qualifier('fps', qualifierValue));
    return this;
  }
}

export default FPSRangeAction;
