import Action from "../Action";
import QualifierValue from "../../qualifier/QualifierValue";
import Qualifier from "../../qualifier/Qualifier";
import {prepareColor} from "../../utils/prepareColor";

class ShadowEffectAction extends Action {
  private effectType: string;

  constructor(effectType: string, strength: number) {
    super();

    this.effectType = effectType;
    this.addQualifier(new Qualifier('e', new QualifierValue(['shadow', strength])));
  }

  strength(strength: number) {
    return this.addQualifier(new Qualifier('e', new QualifierValue(['shadow', strength])));
  }

  offsetX(x:number) {
    return this.addQualifier(new Qualifier('x', new QualifierValue(x)));
  }

  offsetY(y:number) {
    return this.addQualifier(new Qualifier('y', new QualifierValue(y)));
  }

  color(color:string) {
    return this.addQualifier(new Qualifier('co', new QualifierValue(prepareColor(color))));
  }
}

/**
 * @description Applies a shadow filter to the asset.
 * @memberOf Actions.Effect
 * @param shadowLevel
 */
function shadow(shadowLevel?: number):ShadowEffectAction {
  return new ShadowEffectAction('shadow', shadowLevel);
}

export default shadow;
