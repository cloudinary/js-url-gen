import Action from "../Action";
import Qualifier from "../../qualifiers/Qualifier";
import QualifierValue from "../../qualifiers/QualifierValue";

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

  protected prepareQualifiers(): this {
    let qualifierValue;
    if(this.isConstant) {
      qualifierValue = new QualifierValue([this.bitRate, 'constant']).setDelimiter(':');
    }else {
      qualifierValue = new QualifierValue(this.bitRate);
    }
    this.addQualifier(new Qualifier('br', qualifierValue));
    return this;
  }
}

export default BitRateAction;
