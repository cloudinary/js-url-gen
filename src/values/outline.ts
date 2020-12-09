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
function inner_fill(): string {
  return 'inner_fill';
}

/**
 * @@doc
 * @memberOf Values.Outline
 */
function outer(): string {
  return 'outer';
}

const Outline = {
  outer,
  inner,
  inner_fill,
  fill
};

export {
  Outline,
  outer,
  inner,
  inner_fill,
  fill
};
