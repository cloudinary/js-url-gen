import Action from "../../sdk/Action";
import Qualifier from "../../sdk/qualifier/Qualifier";
import QualifierValue from "../../sdk/qualifier/QualifierValue";

/**
 * @description A class to round one or more corners of an image or video.
 * @class RoundCornersAction
 * @augments {Action}
 */
class RoundCornersAction extends Action {
  constructor() {
    super();
  }

  /**
   * @param {number} a
   * @param {number} b
   * @param {number} c
   * @param {number} d
   * @return {RoundCornersAction}
   */
  radius(a:number, b?:number, c?:number, d?:number):this {
    const qualifierValue = new QualifierValue();

    a && qualifierValue.addValue(a);
    b && qualifierValue.addValue(b);
    c && qualifierValue.addValue(c);
    d && qualifierValue.addValue(d);

    this.addQualifier(new Qualifier('r').addValue(qualifierValue));
    return this;
  }

  /**
   * @description Applies maximum rounding to the corners of the asset. An asset with square dimensions becomes a circle.
   */
  max(): this {
    return this.addQualifier(new Qualifier('r', 'max'));
  }
}

export default RoundCornersAction;
