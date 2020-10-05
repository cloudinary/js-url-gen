import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";
import QualifierValue from "../../qualifier/QualifierValue";

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
   * @@doc
   * @description Generates an asset with a circular crop using the 'max' radius value.
   */
  max(): this {
    return this.addQualifier(new Qualifier('r', 'max'));
  }
}

export default RoundCornersAction;
