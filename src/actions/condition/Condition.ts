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

    this.addParam(new Param('if', this.replaceExpression(expression)));

  }

  replaceExpression(expression: string) {
    const resultExpression = expression
      .split(' ')
      .map((val) => CONDITIONAL_OPERATORS[val] || val)
      .join('_');


    return resultExpression;
  }
}

/**
 * @param key
 */
function fromString(expression: string) {
  return new ConditionAction(expression);

}

export {fromString};
export default {fromString};
