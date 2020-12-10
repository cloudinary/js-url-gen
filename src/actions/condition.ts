import {Action} from "../internal/Action";
import {expression} from "../values/expression";
import {Qualifier} from "../internal/qualifier/Qualifier";

/**
 * Sets up a conditional transformation.
 * @memberOf Actions
 * @namespace Condition
 */
class ConditionAction extends Action{
  constructor(exp: string) {
    super();
    this.addQualifier(new Qualifier('if', expression(exp)));
  }
}

/**
 * @memberOf Actions.Condition
 * @description Sets up a conditional transformation with expression.
 * @param {string} expression The condition to meet in order to apply the transformation. </br>
 * Learn more: {@link https://cloudinary.com/documentation/conditional_transformations | Conditional transformations}
 * @return {ConditionAction}
 */
function fromExpression(expression: string): ConditionAction {
  return new ConditionAction(expression);

}

const Condition = {fromExpression, ConditionAction};

export {Condition, fromExpression, ConditionAction};
