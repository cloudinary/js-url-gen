import Action from "../Action";
import {IConditionAction} from "./IConditionAction";
import Param from "../../parameters/Param";

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

class ConditionAction extends Action implements IConditionAction {
  constructor(expression: string) {
    super();

    this.addParam(new Param('if', this.normalizeExpression(expression)));

  }

  /**
   * Normalizes expression from user representation to URL form.
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
 * @param expression
 */
function fromString(expression: string): ConditionAction {
  return new ConditionAction(expression);

}

export {fromString};
export default {fromString};
