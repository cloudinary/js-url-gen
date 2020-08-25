import Action from "../Action";
import Param from "../../parameters/Param";
import ParamValue from "../../parameters/ParamValue";

/**
 * @private
 * @implements IAction
 */
class RoundCornersAction extends Action {
  private param: Param;
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
    const paramValue = new ParamValue();

    a && paramValue.addValue(a);
    b && paramValue.addValue(b);
    c && paramValue.addValue(c);
    d && paramValue.addValue(d);

    this.addParam(new Param('r').addValue(paramValue));
    return this;
  }

  /**
   * @return {RoundCornersAction}
   */
  max(): this {
    return this.addParam(new Param('r', 'max'));
  }
}

export default RoundCornersAction;
