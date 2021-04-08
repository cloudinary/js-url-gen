/**
 * @description Contains functions to select the type of improvement to perform when using Adjust.improve().
 * @namespace Outline
 * @memberOf Qualifiers
 * @example
 * import {Cloudinary} from "@cloudinary/base";
 * import {outdoor} from "@cloudinary/base/qualifiers/improveMode";
 * import {improve} from "@cloudinary/base/actions/adjust";
 *
 * const yourCldInstance = new Cloudinary({cloud: {cloudName: 'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.adjust(improve().mode(outdoor()));
 */

/**
 * @summary qualifier
 * @memberOf Qualifiers.Outline
 */
function fill(): string {
  return 'fill';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.Outline
 */
function inner(): string {
  return 'inner';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.Outline
 */
function innerFill(): string {
  return 'inner_fill';
}

/**
 * @summary qualifier
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
