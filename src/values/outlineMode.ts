/**
 * @description Contains functions to select the type of improvement to perform when using Adjust.improve().
 * @namespace Outline
 * @memberOf Values
 * @example yourAsset.adjust(Adjust.improve().mode(ImproveMode.outdoor()))
 */

/**
 * @memberOf Values.Outline
 */
function fill(): string {
  return 'fill';
}

/**
 * @memberOf Values.Outline
 */
function inner(): string {
  return 'inner';
}

/**
 * @memberOf Values.Outline
 */
function innerFill(): string {
  return 'inner_fill';
}

/**
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
