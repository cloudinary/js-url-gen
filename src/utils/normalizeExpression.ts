const CONDITIONAL_OPERATORS: Record<string, string> = {
  "=": "eq",
  "!=": "ne",
  "<": "lt",
  ">": "gt",
  "<=": "lte",
  ">=": "gte",
  "&&": "and",
  "||": "or",
  "*": "mul",
  "/": "div",
  "+": "add",
  "-": "sub",
  "^": "pow",
  "initial_width": "iw",
  "initial_height": "ih",
  "width": "w",
  "height": "h",
  "aspect_ration": "ar",
  "initial_aspect_ration": "iar",
  "trimmed_aspect_ration": "tar",
  "current_page": "cp",
  "face_count": "fc",
  "page_count": "pc",
  "current_public_id": "cpi",
  "initial_density": "idn",
  "page_names": "pgnames"
};

/**
 * @private
 * Normalizes expression from user representation to URL form.
 * @param {string} expression The expression to normalize.
 * @return {string} The normalized expression.
 */
function normalizeExpression(expression:number | string | string[] | number[]):string {
  const resultExpression = expression
    .toString()
    .split(" ")
    .map((val) => CONDITIONAL_OPERATORS[val] || val)
    .join("_");


  return resultExpression;
}

export default normalizeExpression;
