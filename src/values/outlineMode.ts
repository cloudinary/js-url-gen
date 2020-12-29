/**
 * @@doc
 * @namespace Outline
 * @memberOf Values
 */

/**
 * @@doc
 * @memberOf Values.Outline
 */
function fill(): string {
  return 'fill';
}

/**
 * @@doc
 * @memberOf Values.Outline
 */
function inner(): string {
  return 'inner';
}

/**
 * @@doc
 * @memberOf Values.Outline
 */
function innerFill(): string {
  return 'inner_fill';
}

/**
 * @@doc
 * @memberOf Values.Outline
 */
function outer(): string {
  return 'outer';
}

const OutlineMode = {
  outer,
  inner,
  innerFill,
  fill
};

export {
  OutlineMode,
  outer,
  inner,
  innerFill,
  fill
};
