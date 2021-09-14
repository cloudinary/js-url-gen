import {RANGE_VALUE_RE} from "../consts.js";
import {stringOrNumber} from "../../types/types.js";

/**
 *
 * @param value
 */
export function normRangeValues(value: stringOrNumber) {
  const offset = String(value).match(RANGE_VALUE_RE);
  if (offset) {
    const modifier = offset[5] ? 'p' : '';
    return `${offset[1] || offset[4]}${modifier}`;
  } else {
    return value;
  }
}
