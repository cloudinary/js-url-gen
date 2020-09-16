import Action from "../Action";
import Qualifier from "../../qualifiers/Qualifier";


class GradientFadeEffectAction extends Action {
  private _strength: number;
  private _type: string;

  strength(strength:number): this {
    this._strength = strength;
    return this;
  }
  type(type:string): this {
    this._type = type;
    return this;
  }
  horizontalStartPoint(x:number): this {
    return this.addQualifier(new Qualifier('x', x));
  }

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
 * @description Applies a gradient fade effect from the top edge of the image.
 * @memberOf Actions.Effect
 */
function gradientFade():GradientFadeEffectAction {
  return new GradientFadeEffectAction();
}

export default gradientFade;
