import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";
import {Expression} from "../../values/expression/Expression";

/**
 * Sets up a conditional transformation.
 * @memberOf Actions
 * @namespace Condition
 */
class ConditionAction extends Action{
  constructor(expression: string) {
    super();
    this.addQualifier(new Qualifier('if', Expression.expression(expression)));
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

export {fromExpression, ConditionAction};
