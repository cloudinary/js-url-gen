import {isString} from "../../utils/dataStructureUtils";
import VariableAction from "./VariableAction";
import {ExpressionObject} from "../../values/expression/Expression";

/**
 * @class SetAction
 * @augments VariableAction
 * @@doc
 * @description A class that sets variable
 */
class SetAction extends VariableAction {
  constructor(name: string, value: number | string | string[] | number[] | ExpressionObject) {
    let normalizedValue;
    const parsedValue = Array.isArray(value) ? value.join(':') : value;
    if(isString(parsedValue)){
      normalizedValue = `!${parsedValue}!`;
      //is number
    }else{
      normalizedValue = parsedValue;
    }
    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    /* istanbul ignore next */
    super(name, normalizedValue);
  }
}

export default SetAction;
