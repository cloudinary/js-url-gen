import {V1_PREDEFINED_VARS, V1_CONDITIONAL_OPERATORS} from "../consts";

/**
 * Normalize an offset value
 * @param {String} expression a decimal value which may have a 'p' or '%' postfix. E.g. '35%', '0.4p'
 * @return {Object|String} a normalized String of the input value if possible otherwise the value itself
 */
export function v1NormalizeExpression(expression: string | any) {
  if (typeof expression !== 'string' || expression.length === 0 || expression.match(/^!.+!$/)) {
    if (expression) {
      return expression.toString();
    } else {
      return expression;
    }
  }

  expression = String(expression);
  const operators = "\\|\\||>=|<=|&&|!=|>|=|<|/|-|\\+|\\*|\\^";

  // operators
  const operatorsPattern = "((" + operators + ")(?=[ _]))";
  const operatorsReplaceRE = new RegExp(operatorsPattern, "g");
  expression = expression.replace(operatorsReplaceRE, (match: keyof typeof V1_CONDITIONAL_OPERATORS) => {
    return V1_CONDITIONAL_OPERATORS[match]
  });

  // predefined variables
  const predefinedVarsPattern = "(" + Object.keys(V1_PREDEFINED_VARS).join("|") + ")";
  const userVariablePattern = '(\\$_*[^_ ]+)';
  const variablesReplaceRE = new RegExp(`${userVariablePattern}|${predefinedVarsPattern}`, "g");
  // @ts-ignore
  expression = expression.replace(variablesReplaceRE, (match: string) => (V1_PREDEFINED_VARS[match] || match));

  return expression.replace(/[ _]+/g, '_');
}
