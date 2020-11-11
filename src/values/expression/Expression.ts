import normalizeExpression from '../../utils/normalizeExpression';

/**
 * @description
 * Used for variable or conditional expressions
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/user_defined_variables#arithmetic_expressions |
  * Arithmetic expressions }
 * @namespace Expression
 * @memberOf Values
 */

/**
 * @description sets expression
 * @class ExpressionQualifier
 */
export class ExpressionQualifier {
  readonly value:string;
  constructor(value?:string) {
    this.value = value;
  }

  toString(): string {
    return this.value;
  }
}
/**
 * @description Transforms an input into an expression for use with conditional transformations.
 * @memberOf Values.Expression
 * @param {string} expression The string representing expression.
 * @return {ExpressionQualifier}
 */
function expression(expression: string): ExpressionQualifier{
  return new ExpressionQualifier(normalizeExpression(expression));
}

export {expression};
