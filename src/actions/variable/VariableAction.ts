import Action from "../Action";
import QualifierValue from "../../qualifier/QualifierValue";
import Qualifier from "../../qualifier/Qualifier";
import {ExpressionQualifier} from "../../values/expression/Expression";

/**
 * @description Defines an new user variable.
 * @class VariableAction
 * @augments {Action}
 */
class VariableAction extends Action {
  private isFloat = false;
  private isNumber = false;
  private value: number | string | string[] | number[] | ExpressionQualifier;
  private name: string;
  constructor(name: string, value: number | string | string[] | number[] | ExpressionQualifier) {
    super();
    this.value = value;
    this.name = name;
  }

  /**
   * @description Converts the returned value to type float.
   * values
   */
  asFloat():this {
    this.isFloat = true;
    return this;
  }

  /**
   * @description Converts the returned value to type number.
   * values
   */
  asInteger(): this {
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
