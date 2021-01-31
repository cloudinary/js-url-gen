import {v1NormalizeExpression} from "../utils/v1NormalizeExpression";


/**
 * Parse radius options
 * @private
 * @param {Array<string|number>|string|number} radius The radius to parse
 * @return {string} radius transformation string
 */
export function processRadius(_radius: any) {
  if (!_radius) {
    return _radius;
  }
  let radius: any[];

  if (!Array.isArray(_radius)) {
    radius = [radius];
  }


  if (radius.length === 0 || radius.length > 4) {
    throw new Error("Radius array should contain between 1 and 4 values");
  }
  if (radius.findIndex((x) => x === null) >= 0) {
    throw new Error("Corner: Cannot be null");
  }
  return radius.map(v1NormalizeExpression).join(':');
}
