import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";
import QualifierValue from "../../qualifier/QualifierValue";

/**
 * @class BlurredBackgroundAction
 * @augments Action
 * @description A class for blurred background transformations.
 */
class BlurredBackgroundAction extends Action {
  private intensityLvl:number;
  private brightnessLevel:number;

  constructor() {
    super();

  }
  /**
   * @description Sets the intensity of the blur.
   * @param {number} value - The intensity of the blur.
   */
  intensity(value:number): this {
    this.intensityLvl = value;
    return this;
  }

  /**
   * @description Sets the brightness of the background.
   * @param {number} value - The brightness of the background.
   */
  brightness(value:number): this {
    this.brightnessLevel = value;
    return this;
  }

  protected prepareQualifiers(): this {
    const qualifierValue = new QualifierValue(['blurred', this.intensityLvl, this.brightnessLevel]).setDelimiter(':');
    this.addQualifier(new Qualifier('b', qualifierValue));
    return this;
  }
}

export default BlurredBackgroundAction;
