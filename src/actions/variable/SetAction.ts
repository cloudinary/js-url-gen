import {isExpression, isString} from "../../utils/dataStructureUtils";
import normalizeExpression from "../../utils/normalizeExpression";
import VariableAction from "./VariableAction";

/**
 * @class SetAction
 * @augments VariableAction
 * @@doc
 * @description A class that sets variable
 */
class SetAction extends VariableAction {
  constructor(name: string, value: number | string | string[] | number[]) {
    let normalizedValue;
    const parsedValue = Array.isArray(value) ? value.join(':') : value;

    if(isString(parsedValue)){
      if(isExpression(parsedValue)){
        normalizedValue = normalizeExpression(parsedValue);
      } else {
        normalizedValue = `!${parsedValue}!`;
      }
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
