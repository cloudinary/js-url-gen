import Action from "../Action";
import QualifierValue from "../../qualifier/QualifierValue";
import Qualifier from "../../qualifier/Qualifier";
import {prepareColor} from "../../utils/prepareColor";

/**
 * @description Applies a shadow filter to the asset.
 * @class ShadowEffectAction
 * @augments Action
 */
class ShadowEffectAction extends Action {
  private effectType: string;

  constructor(effectType: string, strength: number) {
    super();

    this.effectType = effectType;
    this.addQualifier(new Qualifier('e', new QualifierValue(['shadow', strength])));
  }

  /**
   * @description The strength of the shadow. (Range: 0 to 100, Server default: 40)
   * @param {number} strength
   * @return {this}
   */
  strength(strength: number) {
    return this.addQualifier(new Qualifier('e', new QualifierValue(['shadow', strength])));
  }

  /**
   * @description The X offset the shadow
   * @param {number} x
   * @return {this}
   */
  offsetX(x:number) {
    return this.addQualifier(new Qualifier('x', new QualifierValue(x)));
  }

  /**
   * @description The Y offset the shadow
   * @param {number} y
   * @return {this}
   */
  offsetY(y:number) {
    return this.addQualifier(new Qualifier('y', new QualifierValue(y)));
  }

  /**
   * @description The color of the shadow (Server default: gray)
   * @param color
   * @return {this}
   */
  color(color:string) {
    return this.addQualifier(new Qualifier('co', new QualifierValue(prepareColor(color))));
  }
}

/**
 * @description Applies a shadow filter to the asset.
 * @memberOf Actions.Effect
 * @param shadowLevel
 * @return {ShadowEffectAction}
 */
function shadow(shadowLevel?: number):ShadowEffectAction {
  return new ShadowEffectAction('shadow', shadowLevel);
}

export default shadow;
