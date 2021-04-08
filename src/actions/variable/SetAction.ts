import {isString} from "../../internal/utils/dataStructureUtils";
import VariableAction from "./VariableAction";
import {ExpressionQualifier} from "../../qualifiers/expression/ExpressionQualifier";

/**
 * @description Sets a user-defined variable.
 * @memberOf Actions.Variable
 * @extends Variable.VariableAction
 * @see Visit {@link Actions.Variable|Variable} for an example
 */
class SetAction extends VariableAction {
  constructor(name: string, value: number | string | string[] | number[] | ExpressionQualifier) {
    const parsedValue = Array.isArray(value) ? value.join(':') : value;


    let finalValue: string | number | ExpressionQualifier;
    if (isString(parsedValue)) {
      finalValue = `!${parsedValue
        .replace(/,/g, '%2C')
        .replace(/\//g, '%2F')
        .replace(/!/g, '%21')}!`;
    } else {
      finalValue = parsedValue;
    }


    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    /* istanbul ignore next */
    super(name, finalValue);
  }
}

export default SetAction;
