import Action from "../Action";
import QualifierValue from "../../qualifier/QualifierValue";
import Qualifier from "../../qualifier/Qualifier";

class ReplaceColorAction extends Action {
  private baseColor: string;
  private toleranceLevel: number;
  private targetColor: string;

  /**
   * @param {string} toColor - The HTML name or RGB/A hex code of the target output color.
   */
  constructor(toColor:string) {
    super();
    this.targetColor = toColor;
  }

  /**
   * @param {number} toleranceLevel - The tolerance threshold (a radius in the LAB color space) from the input color, </br>
   *                                  representing the span of colors that should be replaced with a correspondingly adjusted version of the target output color. </br>
   *                                  Larger values result in replacing more colors within the image. </br>
   *                                  The more saturated the original input color, the more a change in value will impact the result (Server default: 50).
   */
  tolerance(toleranceLevel:number): this {
    this.toleranceLevel = toleranceLevel;
    return this;
  }

  /**
   * @param {string} baseColor - The HTML name or RGB/A hex code of the base input color to map (Server default: the most prominent high-saturation color in the image).
   */
  fromColor(baseColor:string): this {
    this.baseColor = baseColor;
    return this;
  }

  protected prepareQualifiers(): this {
    // e_replace_color:red:30:blue
    const qualifierValue = new QualifierValue(['replace_color', this.targetColor, this.toleranceLevel, this.baseColor]);
    this.addQualifier(new Qualifier('e', qualifierValue));
    return this;
  }
}

export default ReplaceColorAction;
