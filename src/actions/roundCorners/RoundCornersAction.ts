import Action from "../Action";
import Qualifier from "../../qualifiers/Qualifier";
import QualifierValue from "../../qualifiers/QualifierValue";

/**
 * @private
 * @implements IAction
 */
class RoundCornersAction extends Action {
  private qualifier: Qualifier;
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
   * @return {RoundCornersAction}
   */
  max(): this {
    return this.addQualifier(new Qualifier('r', 'max'));
  }
}

export default RoundCornersAction;
