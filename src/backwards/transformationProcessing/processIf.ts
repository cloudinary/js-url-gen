import {legacyNormalizeExpression} from "../utils/legacyNormalizeExpression";

/**
 * Parse "if" parameter
 * Translates the condition if provided.
 * @private
 * @return {string} "if_" + ifValue
 */

export function process_if(ifValue: any) {
  return ifValue ? "if_" + legacyNormalizeExpression(ifValue) : ifValue;
}
