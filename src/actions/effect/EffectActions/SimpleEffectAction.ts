import Action from "../../Action";
import Qualifier from "../../../qualifier/Qualifier";
import QualifierValue from "../../../qualifier/QualifierValue";


class SimpleEffectAction extends Action {
  constructor(effectType?: string, level?: number|string) {
    super();
    const qualifierEffect = this.createEffectParam(effectType, level);
    this.addQualifier(qualifierEffect);
  }

  protected createEffectParam(effectType: string, level?: number|string):Qualifier {
    let qualifierValue;
    if(level) {
      qualifierValue = new QualifierValue([effectType, `${level}`]).setDelimiter(':');
    } else {
      qualifierValue = new QualifierValue(effectType);
    }
    return new Qualifier('e', qualifierValue);
  }
}

export default SimpleEffectAction;
