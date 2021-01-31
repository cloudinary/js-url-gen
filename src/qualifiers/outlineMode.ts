/**
 * @description Contains functions to select the type of improvement to perform when using Adjust.improve().
 * @namespace Outline
 * @memberOf Qualifiers
 * @example yourAsset.adjust(Adjust.improve().mode(ImproveMode.outdoor()))
 */

/**
 * @memberOf Qualifiers.Outline
 */
function fill(): string {
  return 'fill';
}

/**
 * @memberOf Qualifiers.Outline
 */
function inner(): string {
  return 'inner';
}

/**
 * @memberOf Qualifiers.Outline
 */
function innerFill(): string {
  return 'inner_fill';
}

/**
 * @memberOf Qualifiers.Outline
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
