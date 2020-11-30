import QualifierValue from "../../qualifier/QualifierValue";
import {CONDITIONAL_OPERATORS} from "../../internalConstants";

/**
 * @description
 * Used for variable or conditional expressions
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/user_defined_variables#arithmetic_expressions |
  * Arithmetic expressions }
 * @namespace Expression
 * @class Expression
 * @memberOf Values
 */
class Expression extends QualifierValue {
  readonly value: string;

  constructor(value?: string) {
    super();
    this.value = value;
  }

  toString(): string {
    return this.value;
  }

  /**
   * @description Transforms an input into an expression for use with conditional transformations.
   * @memberOf Values.Expression
   * @param {string} exp The string representing expression.
   * @return {Expression}
   */
  static expression(exp: string): Expression {
    return new Expression(exp
      .toString()
      .split(" ")
      .map((val: keyof typeof CONDITIONAL_OPERATORS) => CONDITIONAL_OPERATORS[val] || val)
      .join("_"));
  }
}

const {expression} = Expression;

export {
  Expression,
  expression
};
