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
   * @description Sets the thickness of the lines. 
   * @param {number} cartoonifyLevel The thickness of the lines. (Range: 0 to 100, Server default: 50)
   * @return {this}
   */
  strength(cartoonifyLevel: number): this {
    this.cartoonifyStrength = cartoonifyLevel;
    return this;
  }

  /**
   * @description
   * Sets the decrease in the number of colors and corresponding saturation boost of the remaining colors. <br/>
   * Higher reduction values result in a less realistic look.
   * @param {number | 'bw'} level The decrease in the number of colors and corresponding saturation boost of the remaining colors. (Range: 0 to 100, Server default: automatically adjusts according to the line_strength value). Set to 'bw' for a black and white cartoon effect.
   * @return {this}
   */
  colorReductionLevel(level: number | 'bw'): this {
    this.colorReduction = level;
    return this;
  }

  protected prepareQualifiers(): void {
    this.addQualifier(new Qualifier('e', new QualifierValue([this.effectName, this.cartoonifyStrength, this.colorReduction])));
    return;
  }
}

/**
 * @description Applies a cartoonify effect to the asset.
 * @memberOf Actions.Effect
 * @param cartoonifyLevel The thickness of the lines. (Range: 0 to 100, Server default: 50)
 * @return {CartoonifyEffect}
 */
function cartoonify(cartoonifyLevel?: number):CartoonifyEffect {
  return new CartoonifyEffect('cartoonify', cartoonifyLevel);
}

export default cartoonify;
