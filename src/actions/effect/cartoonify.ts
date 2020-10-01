import Qualifier from "../../qualifier/Qualifier";
import QualifierValue from "../../qualifier/QualifierValue";
import Action from "../Action";

/**
 * @class CartoonifyEffect
 * @augments Action
 * @description Applies a cartoon effect to an image.
 */
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

  /**
   * @description The thickness of the lines. (Range: 0 to 100, Server default: 50)
   * @param {number} cartoonifyLevel The thickness of the lines
   * @return {this}
   */
  strength(cartoonifyLevel: number) {
    this.cartoonifyStrength = cartoonifyLevel;
    return this;
  }

  /**
   * @@doc
   * @description
   * The decrease in the number of colors and corresponding saturation boost of the remaining colors. <br/>
   * (Range: 0 to 100, Server default: automatically adjusts according to the line_strength value). Higher reduction values result in a less realistic look.<br/>
   * Set colorReduction to 'bw'' for a black and white cartoon effect.
   * @param {number | 'bw'} level The level of color to reduce
   * @return {this}
   */
  colorReductionLevel(level: number | 'bw') {
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
 * @return {CartoonifyEffect}
 */
function cartoonify(cartoonifyLevel?: number):CartoonifyEffect {
  return new CartoonifyEffect('cartoonify', cartoonifyLevel);
}

export default cartoonify;
