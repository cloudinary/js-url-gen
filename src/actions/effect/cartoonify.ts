import Qualifier from "../../qualifier/Qualifier";
import QualifierValue from "../../qualifier/QualifierValue";
import Action from "../Action";

class CartoonifyEffect extends Action {
  private colorReduction: number | string;
  private cartoonifyStrength: number;
  private effectName: string;
  constructor(effectName:string, strength:number) {
    // We don't pass level in the constructor, we'll build it in the prepareParam
    super();
    this.cartoonifyStrength = strength;
    this.effectName = effectName;
  }

  strength(cartoonifyLevel: number) {
    this.cartoonifyStrength = cartoonifyLevel;
    return this;
  }

  colorReductionLevel(level: number | string) {
    this.colorReduction = level;
    return this;
  }

  protected prepareQualifiers() {
    this.addQualifier(new Qualifier('e', new QualifierValue([this.effectName, this.cartoonifyStrength, this.colorReduction])));
    return;
  }
}

/**
 * @description Applies a cartoonify filter to the asset.
 * @memberOf Actions.Effect
 * @param cartoonifyLevel
 */
function cartoonify(cartoonifyLevel?: number):CartoonifyEffect {
  return new CartoonifyEffect('cartoonify', cartoonifyLevel);
}

export default cartoonify;
