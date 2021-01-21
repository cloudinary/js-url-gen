/**
 * @doc
 * @memberOf Values
 * @namespace FontWeight
 */

/**
 * @memberOf Values.FontWeight
 */
function thin(): string {
  return 'thin';
}

/**
 * @memberOf Values.FontWeight
 */
function light(): string {
  return 'light';
}

/**
 * @memberOf Values.FontWeight
 */
function normal(): string {
  return 'normal';
}

/**
 * @memberOf Values.FontWeight
 */
function bold(): string {
  return 'bold';
}


const FontWeight = {bold, light, normal, thin};
export {
  FontWeight,
  bold,
  light,
  normal,
  thin
};
