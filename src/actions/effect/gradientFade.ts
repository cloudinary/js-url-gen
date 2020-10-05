import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";

/**
 * @@doc
 * @description Applies a gradient fade effect from the top edge of the image.
 * @class GradientFadeEffectAction
 * @augments Action
 */
class GradientFadeEffectAction extends Action {
  private _strength: number;
  private _type: string;

  /**
   * @description The strength of the fade effect. (Range: 0 to 100, Server default: 20)
   * @param {number} strength
   */
  strength(strength:number): this {
    this._strength = strength;
    return this;
  }

  /**
   * @description The mode of gradient fade
   * @param {string | Values.GradientFade} type
   */
  type(type:string): this {
    this._type = type;
    return this;
  }

  /**
   * @description Sets the x dimension of the start point.
   * @param {number} x
   */
  horizontalStartPoint(x:number): this {
    return this.addQualifier(new Qualifier('x', x));
  }

  /**
   * @description Sets the y dimension of the start point.
   * @param {number} y
   */
  verticalStartPoint(y:number): this {
    return this.addQualifier(new Qualifier('y', y));
  }

  protected prepareQualifiers(): void {
    let str = 'gradient_fade';
    if (this._type) {
      str += `:${this._type}`;
    }

    if (this._strength) {
      str += `:${this._strength}`;
    }

    this.addQualifier(new Qualifier('e', str));
  }
}


/**
 * @description
 * Applies a gradient fade effect from the top edge of the image.
 * Use .x() or .y() to indicate from which edge to fade and how much of the image should be faded.
 * Values of x and y can be specified as a percentage (Range: 0.0 to 1.0), or in pixels (integer values). <br/>
 * Positive values fade from the top (y) or left (x). Negative values fade from the bottom (y) or right (x). <br/>
 * By default, the gradient is applied to the top 50% of the image (y = 0.5).<br/>
 * Only one direction can be specified but the fade can be applied symmetrically using the mode parameter. </br>
 * To apply different amounts of fade to multiple edges, use chained fade effects.
 *
 * @memberOf Actions.Effect
 * @return {GradientFadeEffectAction}
 */
function gradientFade():GradientFadeEffectAction {
  return new GradientFadeEffectAction();
}

export default gradientFade;
