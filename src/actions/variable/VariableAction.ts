import Action from "../Action";
import QualifierValue from "../../qualifier/QualifierValue";
import Qualifier from "../../qualifier/Qualifier";
import {ExpressionObject} from "../../values/expression/Expression";

/**
 * @description Defines an new user variable.
 * @class VariableAction
 * @augments {Action}
 */
class VariableAction extends Action {
  private isFloat = false;
  private isNumber = false;
  private value: number | string | string[] | number[] | ExpressionObject;
  private name: string;
  constructor(name: string, value: number | string | string[] | number[] | ExpressionObject) {
    super();
    this.value = value;
    this.name = name;
  }

  /**
   * @@doc
   * @description Converts the returned value to be of type float, so it can be used in places that require float
   * values
   */
  convertToFloat():this{
    this.isFloat = true;
    return this;
  }

  /**
   * @@doc
   * @description Converts the returned value to be of type number, so it can be used in places that require number
   * values
   */
  convertToNumber(): this{
    this.isNumber = true;
    return this;
  }

  protected prepareQualifiers(): this {
    let qualifierValue;
    if(this.isFloat) {
      qualifierValue = new QualifierValue([this.value, 'to_f']).setDelimiter('_');
    }else if(this.isNumber) {
      qualifierValue = new QualifierValue([this.value, 'to_i']).setDelimiter('_');
    }else{
      qualifierValue = new QualifierValue(this.value);
    }

    this.addQualifier(new Qualifier(`$${this.name}`, qualifierValue));
    return this;
  }

}

export default VariableAction;
