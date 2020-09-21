import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";

const CONDITIONAL_OPERATORS: Record<string, string> = {
  "=": 'eq',
  "!=": 'ne',
  "<": 'lt',
  ">": 'gt',
  "<=": 'lte',
  ">=": 'gte',
  "&&": 'and',
  "||": 'or',
  "*": "mul",
  "/": "div",
  "+": "add",
  "-": "sub",
  "^": "pow"
};

/**
 * Sets up a conditional transformation.
 * @memberOf Actions
 * @namespace Condition
 */
class ConditionAction extends Action{
  constructor(expression: string) {
    super();

    this.addQualifier(new Qualifier('if', this.normalizeExpression(expression)));

  }

  /**
   * @private
   * @description Normalizes expression from user representation to URL form.
   * @param {string} expression The expression to normalize.
   * @return {string} The normalized expression.
   */
  normalizeExpression(expression: string) {
    const resultExpression = expression
      .split(' ')
      .map((val) => CONDITIONAL_OPERATORS[val] || val)
      .join('_');


    return resultExpression;
  }
}

/**
 * @memberOf Actions.Condition
 * @description Sets up a conditional transformation with expression.
 * @param {string} expression The condition to meet in order to apply the transformation. </br>
 * Learn more: {@link https://cloudinary.com/documentation/conditional_transformations | Conditional transformations}
 */
function fromExpression(expression: string): ConditionAction {
  return new ConditionAction(expression);

}

export {fromExpression, ConditionAction};
export default {fromExpression, ConditionAction};
