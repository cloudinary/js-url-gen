/**
 * @memberOf Values
 * @namespace FontWeight
 */

/**
 * @@doc
 * @memberOf Values.FontWeight
 */
function thin(): string {
  return 'thin';
}

/**
 * @@doc
 * @memberOf Values.FontWeight
 */
function light(): string {
  return 'light';
}

/**
 * @@doc
 * @memberOf Values.FontWeight
 */
function normal(): string {
  return 'normal';
}

/**
 * @@doc
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
