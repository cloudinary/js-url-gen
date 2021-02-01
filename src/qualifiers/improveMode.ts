
/**
 * @description Defines the available modes to use with the improve effect.
 * @namespace ImproveMode
 * @memberOf Qualifiers
 */



/**
 * @memberOf Qualifiers.ImproveMode
 * @description Use this mode to get better results on outdoor images.
 * @return string
 */
function outdoor(): string {
  return 'outdoor';
}

/**
 * @memberOf Qualifiers.ImproveMode
 * @description Use this mode to get better results on images with indoor lighting and shadows.
 * @return string
 */
function indoor(): string {
  return 'indoor';
}

const ImproveMode = {
  indoor,
  outdoor
};

export {outdoor, indoor, ImproveMode};

