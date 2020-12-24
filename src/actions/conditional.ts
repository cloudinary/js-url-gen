import {Action} from "../internal/Action";
import {expression} from "../values/expression";
import {Transformation} from "../transformation/Transformation";

/**
 * Sets up a conditional transformation.
 * @memberOf Actions
 * @namespace Conditional
 */


/**
 * @memberOf Actions.Conditional
 */
class ConditionalAction extends Action{
  private ifTx: Transformation;
  private elseTx: Transformation;
  private exp: string;

  constructor(exp: string, ifTx: Transformation) {
    super();
    this.exp = exp;
    this.ifTx = ifTx;
  }

  otherwise(elseTx: Transformation) {
    this.elseTx = elseTx;
    return this;
  }

  toString(): string {
    return [
      `if_${expression(this.exp)}`,
      `${this.ifTx}`,
      this.elseTx && `if_else/${this.elseTx}`,
      `if_end`
    ].filter((a) => a).join('/');
  }
}




/**
 * @memberOf Actions.Conditional
 * @description Sets up a conditional transformation with expression.
 * Learn more: {@link https://cloudinary.com/documentation/conditional_transformations | Conditional transformations}
 *
 * @param {string} expression The condition to meet in order to apply the transformation.
 * @param {SDK.Transformation} tx The transformation to conditionally apply
 * @return {Actions.Conditional.ConditionalAction}
 */
function ifCondition(expression: string, tx: Transformation): ConditionalAction {
  return new ConditionalAction(expression, tx);
}

const Conditional = {ifCondition, ConditionalAction};

export {Conditional, ifCondition, ConditionalAction};
