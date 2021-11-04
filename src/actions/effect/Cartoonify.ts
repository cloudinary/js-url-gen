import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {QualifierValue} from "../../internal/qualifier/QualifierValue.js";
import {Action} from "../../internal/Action.js";
import {ICartoonifyEffectModel} from "../../internal/models/IEffectActionModel.js";
import {IActionModel} from "../../internal/models/IActionModel.js";

/**
 * @description Applies a cartoon effect to an image.
 * @extends SDK.Action
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class CartoonifyEffect extends Action {
  protected _actionModel: ICartoonifyEffectModel = {};
  private colorReduction: number | string;
  private cartoonifyStrength: number;
  private effectName: string;
  constructor(effectName:string, strength:number) {
    // We don't pass level in the constructor, we'll build it in the prepareParam
    super();
    this.cartoonifyStrength = strength;
    this.effectName = effectName;
    this._actionModel.actionType = effectName;
  }

  /**
   * @description Sets the thickness of the lines.
   * @param {number} lineStrength The thickness of the lines. (Range: 0 to 100, Server default: 50)
   * @return {this}
   */
  lineStrength(lineStrength: number): this {
    this.cartoonifyStrength = lineStrength;
    this._actionModel.lineStrength = lineStrength;
    return this;
  }

  /**
   * @description Achieves a black and white cartoon effect.
   * @return {this}
   */
  blackwhite(): this {
    this._actionModel.blackAndWhite = true;
    this.colorReduction = 'bw';
    return this;
  }

  /**
   * @description
   * Sets the decrease in the number of colors and corresponding saturation boost of the remaining colors. <br/>
   * Higher reduction values result in a less realistic look.
   * @param {number } level The decrease in the number of colors and corresponding saturation boost of the remaining colors. (Range: 0 to 100, Server default: automatically adjusts according to the line_strength value). Set to 'bw' for a black and white cartoon effect.
   * @return {this}
   */
  colorReductionLevel(level: number): this {
    this._actionModel.colorReductionLevel = level;
    this.colorReduction = level;
    return this;
  }

  protected prepareQualifiers(): void {
    this.addQualifier(new Qualifier('e', new QualifierValue([this.effectName, this.cartoonifyStrength, this.colorReduction])));
    return;
  }

  static fromJson(actionModel: IActionModel): CartoonifyEffect {
    const {actionType, lineStrength, blackAndWhite, colorReductionLevel} = (actionModel as ICartoonifyEffectModel);

    // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
    // This allows the inheriting classes to determine the class to be created
    const result = new this(actionType, lineStrength);
    blackAndWhite && result.blackwhite();
    colorReductionLevel && result.colorReductionLevel(colorReductionLevel);
    lineStrength && result.lineStrength(lineStrength);

    return result;
  }
}



export {CartoonifyEffect};
